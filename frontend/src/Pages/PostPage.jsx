import React from 'react'

import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostPage() {

  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  //fetch post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/blog/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);

          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);


  //fetch recent posts
  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/blog/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <>






    <main className="mt-10 px-5">

    <p className=" lg:hidden md:hidden text-pretty text-xl mb-3 font-semibold text-purple-950 dark:text-purple-200 leading-tight font-poppins poppins-semibold">
            {post && post.title}
          </p>

      <div className="mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative" >
        <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-gray-950/75 via-purple-500/0 to-gray-500/0 rounded-b-lg"></div>
        <img src={post && post.image} alt={post && post.title} className="w-full rounded-lg " />
        <span className=' absolute mt-14 right-3 text-gray-600 dark:text-gray-400 text-xs poppins-regular '>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
        <div className="p-4 absolute bottom-0 left-0 z-20 ">
          <Link to={`/search?category=${post && post.category}`}
            className="px-3 py-1 font-poppins poppins-semibold text-sm bg-gray-200 text-slate-950 inline-flex items-center justify-center mb-2">{post && post.category}</Link>
            {/* <span className='hidden lg:inline absolute right-0 text-xs text-white font-semibold shadow-lg'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span> */}
          <p className="hidden lg:block md:block lg:text-4xl md:text-2xl font-semibold text-gray-100 leading-tight font-poppins poppins-semibold">
            {post && post.title}
          </p>
          {/* <div className=" flex  mt-3">
            <img src="https://randomuser.me/api/portraits/men/97.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover" />
            <div className='flex-col'>
              <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
              <p className=" text-gray-200 text-xs"> {post && new Date(post.createdAt).toLocaleDateString()} </p>
              
            </div>
            
          </div> */}
          
        </div>
        
        
      </div>
      


      <div className="px-4 lg:px-0 mt-10 text-gray-700 dark:text-gray-400 max-w-screen-lg mx-auto text-lg leading-relaxed">

 
            <span className='lg:hidden text-xs text-gray-500 font-semibold absolute right-8'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>


      <div className="flex mb-5 mt-5">
            <img src={post.userProfile}
              className="h-10 w-10 rounded-full mr-2 object-cover shadow-md" />
            <div className='flex-col'>
              <p className="font-semibold text-slate-950 dark:text-gray-200  text-sm">{post.username}</p>
              <p className=" text-slate-950 dark:text-gray-200 text-xs"> {post && new Date(post.createdAt).toLocaleDateString()} </p>
              
            </div>
            
          </div>
        <p className="post-content text-slate-950 dark:text-gray-400 pb-6 text-pretty" dangerouslySetInnerHTML={{ __html: post && post.content }}></p>

        

      </div>

            {/* <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      /> */}
      
      {/* <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div> */}

    </main>



    </>
  )
}

export default PostPage