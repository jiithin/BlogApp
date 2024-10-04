import React from 'react'

function Projects() {
  return (
    <>
        <div><p id='head'>Categories</p></div>

        {/* sample */}
    <div className="h-screen bg-transparent flex items-center justify-center">

<div className="grid grid-cols-6 gap-2 px-16">

  {/* <!-- Item 1 --> */}
  <div className="flex flex-col gap-1">

    {/* <!-- Image --> */}
    <a href="" className="bg-purple-500 rounded-xl">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg" className="rounded-xl hover:translate-x-0 hover:-translate-y-2 delay-50 duration-100" />
    </a>

    {/* <!-- Games Title --> */}
    <a href="#" className="hover:text-purple-500 text-gray-700 font-semibold"> VALORANT </a>

    {/* <!-- Viewers --> */}
    <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 78.4K viewers </a>

    {/* <!-- Category Tags --> */}
    <div className="flex flex-row flex-wrap gap-2">
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Shooter </a>
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> FPS </a>
    </div>      

  </div>


  <div className="flex flex-col gap-1">

    <a href="" className="bg-purple-500 rounded-xl">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" className="rounded-xl hover:translate-x-0 hover:-translate-y-2 delay-50 duration-100" />
    </a>


    <a href="#" className="hover:text-purple-500 text-gray-700 font-semibold"> Just Chatting </a>


    <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 236K viewers </a>


    <div className="flex flex-row flex-wrap gap-2">
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> IRL </a>
    </div>      

  </div>


  <div className="flex flex-col gap-1">


    <a href="" className="bg-purple-500 rounded-xl">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg" className="rounded-xl hover:translate-x-0 hover:-translate-y-2 delay-50 duration-100" />
    </a>


    <a href="#" className="hover:text-purple-500 text-gray-700 font-semibold"> Elden Ring </a>


    <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 350K viewers </a>


    <div className="flex flex-row flex-wrap gap-2">
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> RPG </a>
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
    </div>      

  </div>


  <div className="flex flex-col gap-1">


    <a href="" className="bg-purple-500 rounded-xl">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg" className="rounded-xl hover:translate-x-0 hover:-translate-y-2 delay-50 duration-100" />
    </a>


    <a href="#" className="hover:text-purple-500 text-gray-700 font-semibold"> Apex Legends </a>

    <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 89.7K viewers </a>


    <div className="flex flex-row flex-wrap gap-2">
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> FPS </a>
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Shooter </a>
    </div>      

  </div>


  <div className="flex flex-col gap-1 ">


    <a href="" className="bg-purple-500 rounded-xl">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/513181-285x380.jpg" className="rounded-xl hover:translate-x-0 hover:-translate-y-2 delay-50 duration-100" />
    </a>


    <a href="#" className="hover:text-purple-500 text-gray-700 font-semibold"> Genshin Impact </a>


    <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 9K viewers </a>


    <div className="flex flex-row flex-wrap gap-2">
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> RPG </a>
    </div>      

  </div>


  <div className="flex flex-col gap-1 ">

    <a href="" className="bg-purple-500 rounded-xl">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg" className="rounded-xl hover:translate-x-0 hover:-translate-y-2 delay-50 duration-100" />
    </a>


    <a href="#" className="hover:text-purple-500 text-gray-700 font-semibold"> Lost Ark </a>


    <a href="#" className="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 199K viewers </a>


    <div className="flex flex-row flex-wrap gap-2">
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> RPG </a>
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
      <a href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> MMO </a>
    </div>      

  </div>

</div>

</div>
    </>

  )
}

export default Projects