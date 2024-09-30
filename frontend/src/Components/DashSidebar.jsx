import React, { useEffect, useState } from 'react'

import {  HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import { PiPowerBold } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';



function DashSidebar() {
    const currentUser = useSelector((state) => state.user);
    const location = useLocation();
  return (
    <>
   



{/* large devices */}
<div className="fixed top-56 right-5 h-auto z-20  lg:block hidden card w-auto bg-gray-200 dark:bg-slate-800  p-5 shadow-md border border-gray-500/25 rounded-2xl">


      <Link to='/dashboard'
        className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
      >
     <HiChartPie className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Dashboard
      </Link>

      <Link to='/dashboard?tab=profile'
        className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25  text-gray-700 transition-all ease-linear"
      >
      <HiUser className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Profile
      </Link>

      <Link to='/dashboard?tab=posts'
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
      >
      <HiInbox className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Posts
      </Link>

      <Link
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-red-500 hover:bg-red-500/25 dark:hover:bg-red-600/25   text-red-500 transition-all ease-linear"
      >
          <PiPowerBold className='text-red-500 mt-1'/>  
        Logout
      </Link>

</div>



{/* small devices */}
<div
  className="flex items-center justify-between fixed bottom-9 left-32 md:left-72 md:ml-5 h-auto w-auto z-20 lg:hidden bg-gray-200/75 dark:bg-slate-800/75 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
>
  <Link to='/dashboard'
    className="text-red-500 hover:text-red-600 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
  >
     <HiChartPie className='text-gray-500 dark:text-indigo-300'/>
  </Link>
  <Link to='/dashboard?tab=profile'
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
  >
        <HiUser className='text-gray-500 dark:text-indigo-300'/>
  </Link>
  <Link to='/dashboard?tab=posts'
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
  >
        <HiInbox className='text-gray-500 dark:text-indigo-300'/>
  </Link>
  <Link
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
  >
          <PiPowerBold className='text-pink-500 '/>
  </Link>
</div>

</>
  )
}


export default DashSidebar