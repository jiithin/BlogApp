import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Projects() {

    const [userPosts,setUserPosts]=useState([])

    //get all posts only 9 posts willshow becoz we set a query limiter
    useEffect(()=>{
      const fetchPosts=async()=>{
        try{
          const res=await fetch(`blog/post/getposts`)
          const data=await res.json()
          if(res.ok){
            setUserPosts(data.posts)
          }
          //console.log(data)
        }catch(error){
          console.log(error.message)
        }
      };
  
        fetchPosts()
    });
  return (
    <>
        <div><p id='head' className='text-4xl font-poppins poppins-bold py-5'>Blogs</p></div>

        {/* sample */}
<div className="flex flex-col h-auto bg-transparent items-center mt-5">
  <div className="grid gap-8 px-16 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">

    {/* cards */}
  {userPosts && userPosts.length > 0 ? (userPosts.map((post) => (
  <div className="relative mx-auto w-full pt-5">
  <Link to={`/post/${post.slug}`} className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
    <div className="rounded-lg">
      <div className="relative flex h-auto justify-center overflow-hidden rounded-lg">
        <div className="w-full h-40 transform transition-transform duration-500 ease-in-out hover:scale-110">
          <img src={ post.image} alt={ post.title} />
        </div>


        <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none bg-gray-100 px-2 py-1 text-sm text-slate-900 font-poppins font-semibold">{post.category}</span>
      </div>

      <div className="">
        <div className="mt-4">
          <div className="flex items-center">
            <div className="relative">
              <p className="line-clamp-1 text-base font-poppins font-semibold text-gray-800 dark:text-gray-200 md:text-lg" title="New York">{post.title}</p>
              <p className="mt-1 line-clamp-1 text-sm text-gray-500 dark:text-gray-300"><span className='font-poppins poppins-medium'>{post.username}</span>{post && (post.content.length / 1000).toFixed(0)} mins read</p>
              <p className=" text-gray-400 dark:text-gray-500 text-xs">{post && new Date(post.createdAt).toLocaleDateString()} </p>
            </div>
          </div>
        </div>

        <p
    className=" block h-40 text-sm text-pretty lg:text-base text-blackfont-light relative group-hover:h-24 leading-[1.2em] duration-500 overflow-hidden text-gray-600 dark:text-gray-400 font-poppins"
    dangerouslySetInnerHTML={{ __html: post && post.content }} >
    
  </p>

        <div className="mt-4 border-b border-gray-300 dark:border-gray-700 ">

        </div>
      </div>
    </div>
  </Link>
</div>))):(
  <div className="text-center">
  <p className=' py-12 lg:text-3xl text-xl font-poppins poppins-medium mb-4 text-transparent bg-clip-text bg-gradient-to-l to-blue-400 from-purple-600 '>No posts to find.</p>
  </div> )}

  </div>
</div>
    </>

  )
}

export default Projects