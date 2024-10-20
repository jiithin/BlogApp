import { Button, Card, Modal, Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { TbFileShredder } from "react-icons/tb";
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function DashPosts() {
  const {currentUser}=useSelector((state)=>state.user)
  const [userPosts,setUserPosts]=useState([])
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  const navigate = useNavigate();
  //console.log(userPosts)


  //get all posts only 9 posts willshow becoz we set a query limiter
  useEffect(()=>{
    const fetchPosts=async()=>{
      try{
        const res=await fetch(`blog/post/getposts?userId=${currentUser._id}`)
        const data=await res.json()
        if(res.ok){
          setUserPosts(data.posts)
        }
        //console.log(data)
      }catch(error){
        console.log(error.message)
      }
    };
    if(currentUser.isAdmin){
      fetchPosts()
    }
  }, [currentUser._id]);

  //showmore function
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

  //delete post
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
    <div className='px-4 mt-4'>
    {/* <p className=' text-center lg:text-3xl text-xl font-poppins poppins-medium mb-4 text-transparent bg-clip-text bg-gradient-to-l to-blue-400 from-purple-600 '>All Posts</p> */}
    {currentUser.isAdmin && userPosts.length > 0 ? (
<Card className="max-w-4xl mx-auto bg-gray-200/50 dark:bg-slate-800/50 shadow-lg">
      <div className=" flex items-center justify-between">
        <p className="text-xl font-poppins poppins-medium mb-4 text-transparent bg-clip-text bg-gradient-to-l to-blue-400 from-purple-600">Your Posts</p>

      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {userPosts.map((post) => (
          <li className="py-3 sm:py-4" >
            <div className="flex items-center space-x-4">
              <div className="shrink-0" >
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-md w-32"
                  
                />
              </div>
              <div className="min-w-0 flex-1">
                <p onClick={() => {
                    navigate(`post/${post.slug}`);
                  }} className="truncate text-lg font-medium text-purple-900 dark:text-purple-300">{post.title}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400 mb-1">{post.category}</p>
                <p className="truncate text-xs text-gray-500 dark:text-gray-400">{new Date(post.updatedAt).toLocaleDateString()}</p>
              </div>
              {/* right */}
              <div className="inline-flex items-center text-base font-semibold">
              <Link
                      className='text-indigo-500 me-5'
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                
                <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className='font-medium text-red-500   cursor-pointer'
                    >
                      Delete
                    </span></div>
            </div>
          </li>))}
          
        </ul>
      </div>
    </Card>
    ) : (
        <p className='divulge py-12 text-center lg:text-3xl text-xl font-poppins poppins-medium mb-4 text-transparent bg-clip-text bg-gradient-to-l to-blue-400 from-purple-600 '>No Posts Yet.</p>
      )}
                {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full font-semibold text-indigo-600 dark:text-indigo-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
      </div>


   
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
        className="bg-transparent backdrop-blur-sm "
      >
        <Modal.Header className="bg-slate-800 rounded-t-md " />
        <Modal.Body className="bg-slate-800 rounded-b-md " >
          <div className='text-center'>
            <TbFileShredder  className='h-16 w-16 text-red-700 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-400 dark:text-gray-100'>
              Are you sure you want to <span className='text-red-500 font-semibold'>delete</span> this post?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeletePost}
              className="w-full" >
                Delete
              </Button>
              <Button color='dark' onClick={() => setShowModal(false)}
                className="w-full" >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default DashPosts