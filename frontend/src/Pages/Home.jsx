import { Card } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Home() {
  //const {currentUser}=useSelector((state)=>state.user)
  const [userPosts,setUserPosts]=useState([])
  const navigate = useNavigate();

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
{/* <div><p id='head'>DIVULGE</p></div> */}

<div className="p-5">
<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Post fast from anywhere</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Devulge on iOS & Android. Download the app today.</p>

</div>
</div>

<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-4">

  {/* card */}
{userPosts && userPosts.length > 0 ? ( userPosts.map((post) => (
<div
  className="card shadow-lg lg:h-[20em] h-[15em] max-w-screen-2xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden " onClick={(e) =>  navigate(`/post/${post.slug}`)}>
    <img src={ post.image} alt={ post.title} className="absolute align-middle top-0 left-0 w-full h-full rounded-lg object-cover" />
  <div className="absolute align-middle top-0 left-0 h-full w-full group-hover:backdrop-blur-sm group-hover:bg-slate-800/35"></div>


  <div
    className="container text-white z-10  font-poppins flex flex-col gap-1"
  >
    
    <div className="h-fit w-full">
      {/* category tag */}
    <div className="flex justify-center items-center h-fit w-fit gap-1">
      <div className="  text-black poppins-medium text-sm font-normal px-1 bg-gray-100 duration-300 cursor-pointer">
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
    className=" block px-3 text-sm text-pretty lg:text-base text-blackfont-light relative h-[0em] group-hover:h-24 leading-[1.2em] duration-500 overflow-hidden text-gray-100 "
    dangerouslySetInnerHTML={{ __html: post && post.content }} >
    
  </p>
</div>))):(
  <>

  <div className="card shadow-lg lg:h-[20em] h-[15em] max-w-screen-2xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden p-4 bg-gray-200 dark:bg-gray-500">
        <div className="animate-pulse rounded-lg bg-gray-400 h-full w-full"></div>
  <div className="animate-pulse flex space-x-4">

    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-gray-400 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-gray-400 rounded col-span-1"></div>
          <div className="h-2 bg-gray-400 rounded col-span-2"></div>
        </div>
        <div className="h-2 bg-gray-400 rounded"></div>
      </div>
    </div>
  </div>
</div>

<div className="card shadow-lg lg:h-[20em] h-[15em] max-w-screen-2xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden p-4 bg-gray-200 dark:bg-gray-500">
<div className="animate-pulse rounded-lg bg-gray-400 h-full w-full"></div>
<div className="animate-pulse flex space-x-4">

<div className="flex-1 space-y-6 py-1">
<div className="h-2 bg-gray-400 rounded"></div>
<div className="space-y-3">
<div className="grid grid-cols-3 gap-4">
  <div className="h-2 bg-gray-400 rounded col-span-1"></div>
  <div className="h-2 bg-gray-400 rounded col-span-2"></div>
</div>
<div className="h-2 bg-gray-400 rounded"></div>
</div>
</div>
</div>
</div>

<div className="card shadow-lg lg:h-[20em] h-[15em] max-w-screen-2xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden p-4 bg-gray-200 dark:bg-gray-500">
<div className="animate-pulse rounded-lg bg-gray-400 h-full w-full"></div>
<div className="animate-pulse flex space-x-4">

<div className="flex-1 space-y-6 py-1">
<div className="h-2 bg-gray-400 rounded"></div>
<div className="space-y-3">
<div className="grid grid-cols-3 gap-4">
  <div className="h-2 bg-gray-400 rounded col-span-1"></div>
  <div className="h-2 bg-gray-400 rounded col-span-2"></div>
</div>
<div className="h-2 bg-gray-400 rounded"></div>
</div>
</div>
</div>
</div>

</>


)}
</div>


</>
  )
}

export default Home