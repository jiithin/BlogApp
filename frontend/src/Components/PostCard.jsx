import React from 'react'
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <>
       

  <Link to={`/post/${post.slug}`}>
<div
className="card shadow-lg lg:h-[15em] h-[15em] max-w-screen-xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden ">
  <img src={ post.image} alt={ post.title} className="absolute align-middle top-0 left-0 w-full h-full rounded-lg object-cover" />
<div className="absolute align-middle top-0 left-0 h-full w-full"></div>


<div
  className="container text-white z-10  font-poppins flex flex-col gap-1"
>
  
  <div className="h-fit w-full">
    {/* category tag */}
  <div className="flex justify-center items-center h-fit w-fit gap-1">
    <div className="  text-black poppins-medium text-sm font-normal p-1 bg-gray-100 duration-300 cursor-pointer">
      <p>{post.category}</p>
    </div>
  </div>
    
  <p className="card_heading lg:text-xl px-1 poppins-medium text-md text-gray-100 bg-gradient-to-t from-gray-800/10 via-gray-800/40 to-gray-800/10 backdrop-blur-sm">
      {post.title.slice(0,80)}...
    </p>

  </div>


</div>

</div>
</Link>


</>
  )
}

export default PostCard