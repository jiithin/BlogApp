
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
{userPosts && userPosts.length > 0 ? ( 
<div className="grid grid-flow-col grid-cols-8 px-20 max-h-full">
<div className=' text-end col-span-5 '>
  <img src={userPosts[0].image} alt="" className='w-full  object-cover' />
</div>
<div className=' text-start col-span-3 '>
<div class="min-h-screen">
            <div class="p-6">
                <p
                    class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    {userPosts[0].category}
                </p>
                <p class="block mb-2 font-poppins poppins-semibold text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {userPosts[0].title}
                </p>
                <p class="block mb-8 font-monte text-base antialiased font-normal leading-relaxed overflow-hidden text-gray-700" dangerouslySetInnerHTML={{ __html: userPosts && userPosts[0].content.slice(0,500)}}>
                
                </p>

              {/* user */}
            <div className="flex mb-5 mt-5">
            <img src={userPosts[0].userProfile}
              className="h-10 w-10 rounded-full mr-2 object-cover shadow-md" />
            <div className='flex-col'>
              <p className="font-semibold text-slate-950 dark:text-gray-200  text-sm">{userPosts[0].username}</p>
              <p className=" text-slate-950 dark:text-gray-200 text-xs">{userPosts && new Date(userPosts[0].createdAt).toLocaleDateString()} . <span className=' text-gray-600 dark:text-gray-400 text-xs poppins-regular '>
          {userPosts[0] && (userPosts[0].content.length / 1000).toFixed(0)} mins read
        </span></p>
            </div>
          </div>
    
            </div>
        </div>
    </div>


    </div>):(
      <div className="grid grid-flow-col grid-cols-8"></div>
    )}


{/* cards */}
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-4">

  {/* card */}
{userPosts && userPosts.length > 0 ? ( userPosts.map((post) => (
<div
  className="card shadow-lg lg:h-[20em] h-[15em] max-w-screen-2xl group gap-[0.5em] rounded-xl relative flex justify-end flex-col z-10 overflow-hidden " onClick={(e) =>  navigate(`/post/${post.slug}`)}>
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
    className=" block px-3 text-sm text-pretty lg:text-base text-blackfont-light relative h-[0em] group-hover:h-24 leading-[1.2em] duration-500 overflow-hidden text-gray-200 "
    dangerouslySetInnerHTML={{ __html: post && post.content }} >
    
  </p>
</div>
))):(
  <>
{/* loading card */}
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