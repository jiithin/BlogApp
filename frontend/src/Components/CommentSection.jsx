import { Alert, Button, Modal, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PiShieldWarningBold } from 'react-icons/pi';
import { IoSendSharp } from "react-icons/io5";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/blog/comment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment('');
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  //get all comments
  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/blog/comment/getPostComments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  //handle like
  const handleLike = async (commentId) => {
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/blog/comment/likeComment/${commentId}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (comment, editedContent) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  //delete comment
  const handleDelete = async (commentId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/blog/comment/deleteComment/${commentId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='max-w-5xl mx-auto w-full p-3'>
                  <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-800 dark:text-gray-200 text-lg font-semibold p-4'>
              Comments <span className='bg-purple-500 text-white px-2 w-auto rounded-full ml-2 '>{comments.length} </span>
            </p>

          </div>
     
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className=' p-5'
        >
          <input
            type="text"
            placeholder='Add a comment...'
            className="peer block w-full appearance-none border-0 bg-transparent py-1 px-0 text-sm focus:outline-none focus:ring-0 dark:text-gray-300"
            maxLength='200'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        <div className='flex justify-between items-center mt-5'>
           {currentUser ? (
        <div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
          <img
            className='h-8 w-8 object-cover rounded-full'
            src={currentUser.profilePicture}
            alt=''
          />
          <Link
            to={'/dashboard?tab=profile'}
            className='text-s, text-gray-700 dark:text-gray-300  hover:font-semibold'
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className='text-sm text-teal-500 my-5 flex gap-1'>
          You must be signed in to comment.
          <Link className='text-blue-500 hover:underline' to={'/sign-in'}>
            Sign In
          </Link>
        </div>
      )}
      
        <button type='submit'>
              < IoSendSharp className='h-7 w-7 text-purple-600 dark:text-purple-500'/>
            </button>
          {commentError && (
            <Alert color='failure' className='mt-5'>
              {commentError}
            </Alert>
          )}
          </div>
        </form>
      )}

      {comments.length === 0 ? (
        <p className='text-md my-5 text-center'>No comments yet!</p>
      ) : (
        <>
          <div className='text-sm my-5 flex items-center gap-1'>
            <p>Comments</p>
            <div className='border border-gray-400 py-1 px-2 rounded-sm'>
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(commentId) => {
                setShowModal(true);
                setCommentToDelete(commentId);
              }}
            />
          ))}
        </>
      )}
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
              <PiShieldWarningBold  className='h-16 w-16 text-red-700 dark:text-red-700 mb-4 mx-auto' />
              <h3 className='mb-5 text-lg text-gray-300 dark:text-gray-400'>
                Are you sure you want to <span className='text-red-500 font-semibold'>Remove</span> this comment?
              </h3>
              <div className='flex justify-center gap-4'>
                <Button color='failure' onClick={commentToDelete} 
                className='w-full' >
                  Delete
                </Button>
                <Button color='dark' onClick={() => setShowModal(false)}
                    className='w-full' >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </div>
  );
}
