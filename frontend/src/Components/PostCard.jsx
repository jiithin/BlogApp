import React from 'react'
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <>
       

  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3  gap-4 p-4">
  <Link to={`/post/${post.slug}`}>
<div
className="card shadow-lg lg:h-[15em] h-[15em] max-w-screen-xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden " onClick={(e) =>  navigate(`/post/${post.slug}`)}>
  <img src={ post.image} alt={ post.title} className="absolute align-middle top-0 left-0 w-full h-full rounded-lg object-cover" />
<div className="absolute align-middle top-0 left-0 h-full w-full group-hover:backdrop-blur-sm group-hover:bg-slate-800/40"></div>


<div
  className="container text-white z-10  font-poppins flex flex-col gap-1"
>
  
  <div className="h-fit w-full">
    {/* category tag */}
  <div className="flex justify-center items-center h-fit w-fit gap-1">
    <div className="  text-black poppins-medium text-sm font-normal p-1 bg-gray-100 dark:bg-slate-950 dark:text-gray-200 duration-300 cursor-pointer">
      <p>{post.category}</p>
    </div>
  </div>
    
  <p className="card_heading lg:text-xl px-1 poppins-medium text-md text-gray-100 bg-gradient-to-t from-gray-800/10 via-gray-800/40 to-gray-800/10 backdrop-blur-sm">
      {post.title.slice(0,80)}...
    </p>
    {/* <p className="text-sm text-gray-200">
      {post.username}
    </p> */}
  </div>

  {/* <div className="flex justify-left items-center h-fit w-full gap-2">
    <div className="w-fit h-fit text-gray-300  text-xs font-light">
      <p>{post && new Date(post.createdAt).toLocaleDateString()}</p>
      
    </div>
  </div> */}
</div>
<p
    className=" block px-3 text-sm text-center text-pretty lg:text-base text-blackfont-light relative h-[0em] group-hover:h-12 leading-[1.2em] duration-500 overflow-hidden text-gray-200 ">
    ReadMore
  </p>
</div>
</Link>
</div>

</>
  )
}

export default PostCard