import { Button, Card, Modal, Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function DashPosts() {
  const {currentUser}=useSelector((state)=>state.user)
  const [userPosts,setUserPosts]=useState([])
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  console.log(userPosts)

  useEffect(()=>{
    const fetchPosts=async()=>{
      try{
        const res=await fetch(`blog/post/getposts?userId=${currentUser._id}`)
        const data=await res.json()
        if(res.ok){
          setUserPosts(data.posts)
        }
        console.log(data)
      }catch(error){
        console.log(error.message)
      }
    };
    if(currentUser.isAdmin){
      fetchPosts()
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/blog/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/blog/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className='px-4'>
    {currentUser.isAdmin && userPosts.length > 0 ? (
<Card className="max-w-4xl mx-auto ">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl  font-bold leading-none text-indigo-700 dark:text-indigo-400">Posts</p>
        {showMore && (
        <button onClick={handleShowMore} className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
          View More
        </button>)}
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {userPosts.map((post) => (
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-md w-32"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-lg font-medium text-purple-900 dark:text-purple-300">{post.title}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400 mb-1">{post.category}</p>
                <p className="truncate text-xs text-gray-500 dark:text-gray-400">{new Date(post.updatedAt).toLocaleDateString()}</p>
              </div>
              {/* right */}
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <Link
                      className='text-green-400 transform ease-in-out hover:scale-105 duration-100  me-5'
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                
                <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className='font-medium text-red-500 transform ease-in-out hover:scale-105 duration-100  cursor-pointer'
                    >
                      Delete
                    </span></div>
            </div>
          </li>))}
          
        </ul>
      </div>
    </Card>
    ) : (
        <p>No Posts Yet.</p>
      )}
      </div>


   
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default DashPosts