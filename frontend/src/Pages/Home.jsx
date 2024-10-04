import { Card } from 'flowbite-react'
import React from 'react'


function Home() {
  return (
    
    
<>
{/* <div><p id='head'>DIVULGE</p></div> */}

<div className="p-5">
<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Post fast from anywhere</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Devulge on iOS & Android. Download the app today.</p>

</div>
</div>




<div className="grid grid-cols-3 md:grid-cols-2 gap-4 lg:gap-6 p-5">

    <div className="grid gap-4">
        



<div
  className="card shadow-md h-[25em] max-w-full group gap-[0.5em] rounded-xl relative flex justify-end flex-col p-6 z-10 overflow-hidden  bg-[url(https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg)] bg-cover">
  <div className="absolute align-middle top-0 left-0 h-full w-full group-hover:backdrop-blur-sm "></div>


  <div
    className="container text-black z-10 relative font-nunito flex flex-col gap-2"
  >
    <div className="h-fit w-full">
    <h1 className="card_heading text-xl font-bold">
        STEEL BALL RUN
      </h1>
      <p className="text-lg">
        By Hirohiko Araki
      </p>
    </div>

    <div className="flex justify-left items-center h-fit w-full gap-2">
      <div className="w-fit h-fit text-gray-800  text-md font-light">
        <p>Article</p>
      </div>
    </div>

    <div className="flex justify-center items-center h-fit w-fit gap-1">
      <div
        className="border-2 border-slate-700 rounded-md text-black  text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-slate-800 hover:text-white duration-300 cursor-pointer"
      >
        <p>Drama</p>
      </div>
      <div
        className="border-2 border-slate-700 rounded-md text-black  text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-slate-800 hover:text-white duration-300 cursor-pointer"
      >
        <p>Action</p>
      </div>
      <div
        className="border-2 border-slate-700 rounded-md text-black  text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-slate-800 hover:text-white duration-300 cursor-pointer"
      >
        <p>Balls</p>
      </div>
    </div>
  </div>
  <p
    className=" block text-blackfont-light relative h-[0em] group-hover:h-24 leading-[1.2em] duration-500 overflow-hidden text-gray-800"
  >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet officiis,
    dolorem ab animi magnam culpa fugit error voluptates adipisci, debitis ut
    fuga at nisi laborum suscipit a eos similique unde.
  </p>
</div>

<Card
      className="max-w-sm bg-cover"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
      
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white bg-transparent">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>




  
    </div>
</div>

</>
  )
}

export default Home