
import React, { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


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
  <div className="container justify-center my-10 hidden lg:flex md:flex">
<div className="flex px-40 items-center">
<div className=''>
  <img src={userPosts[0].image} alt="" className='w-[42rem]  object-cover' />
</div>
<div className=' text-start '>
<div class="min-h-auto">
            <div class="p-6">
                <p
                    class=" px-3 py-1 mb-2 w-fit font-poppins poppins-semibold text-sm  text-slate-950 bg-gray-100 dark:bg-slate-950 dark:text-gray-200 uppercase">
                    {userPosts[0].category}
                </p>
                <p class="block mb-2 font-poppins poppins-semibold text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {userPosts[0].title}
                </p>
                <p class="block mb-8 font-monte text-base antialiased font-normal leading-relaxed overflow-hidden text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: userPosts && userPosts[0].content.slice(0, userPosts[0].content.indexOf('.'))}}>
                
                </p>

              {/* user */}
            <div className="flex mb-5 mt-5">
            <img src={userPosts[0].userProfile}
              className="h-10 w-10 rounded-full mr-2 object-cover shadow-md" />
            <div className='flex-col'>
              <p className="font-semibold text-slate-950 dark:text-gray-300  text-sm">{userPosts[0].username}</p>
              <p className=" text-slate-950 dark:text-gray-300 text-xs">{userPosts[0].category} . <span className=' text-gray-600 dark:text-gray-400 text-xs poppins-regular '>
          {userPosts[0] && (userPosts[0].content.length / 1000).toFixed(0)} mins read
        </span></p>
            </div>
          </div>
    
            </div>
        </div>
    </div>

    </div>
    </div>):(
      <div className="grid grid-flow-col grid-cols-8"></div>
    )}

{userPosts && userPosts.length > 0 ? ( 
<div className="container mx-auto my-5 lg:hidden md:hidden">
<Link to={`/post/${userPosts[0].slug}`}>
    <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
            <img
                  src={userPosts[0].image}
                  alt={userPosts[0].title}
                  className="rounded-sm" />
            </div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <p className="w-full font-bold text-2xl text-white leading-tight mb-2">{userPosts[0].title}</p>
                <p className="w-full text-xl text-gray-100 leading-tight">{userPosts[0].category}</p>
            </div>

        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h4 className="hidden md:block text-xl text-gray-400">{userPosts[0].category}</h4>
                <h3 className="hidden md:block font-bold text-2xl text-gray-700">{userPosts[0].title}</h3>
                <p className="text-gray-600 text-justify" dangerouslySetInnerHTML={{ __html: userPosts[0] && userPosts[0].content.slice(0, userPosts[0].content.indexOf('.')) }}></p>
                <a className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                    <span>View More</span>
                    <span className="text-xs ml-1">&#x279c;</span>
                </a>
            </div>
        </div>

    </div>
    </Link>
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
  <div className="absolute align-middle top-0 left-0 h-full w-full group-hover:backdrop-blur-sm bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:bg-gray-900/40"></div>


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
      
    <p className="card_heading lg:text-xl px-1 poppins-medium text-md text-gray-100 line-clamp-2">
        {post.title}
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
    className=" block px-3 text-sm text-pretty lg:text-base text-blackfont-light relative h-[0em] group-hover:h-24 leading-[1.2em] duration-500 overflow-hidden text-gray-300 "
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