import React, { useEffect, useState } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import { PiPowerBold } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

function DashSidebar() {
    const currentUser = useSelector((state) => state.user);
    const location = useLocation();
  return (
    <>
   



{/* large devices */}
<div class="fixed top-48 right-5 h-auto z-20  lg:block hidden card w-auto bg-gray-200 dark:bg-slate-800  p-5 shadow-md rounded-2xl">
  <ul class="w-full flex flex-col gap-2">
    <li
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <Link to='/dashboard'
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-purple-300 hover:bg-white dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
      >
     <HiChartPie className='text-gray-500 dark:text-indigo-300'/>
        Dashboard
      </Link>
    </li>
    <li
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <Link to='/dashboard?tab=profile'
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-purple-300 hover:bg-white dark:hover:bg-gray-600/25  text-gray-700 transition-all ease-linear"
      >
      <HiUser className='text-gray-500 dark:text-indigo-300'/>
        Profile
      </Link>
    </li>
    <li
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <Link to='/dashboard?tab=posts'
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-purple-300 hover:bg-white dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
      >
      <HiInbox className='text-gray-500 dark:text-indigo-300'/>
        Posts
      </Link>
    </li>
    <li
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <Link
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover dark:text-red-500 hover:bg-red-500/25 dark:hover:bg-red-600/25   text-red-500 transition-all ease-linear"
      >
          <PiPowerBold className='text-red-500 '/>  
        Logout
      </Link>
    </li>
  </ul>
</div>



{/* small devices */}
<div
  className="flex items-center justify-between fixed bottom-9 left-32 md:left-80 h-auto w-auto z-20 lg:hidden bg-gray-200/75 dark:bg-slate-800/75 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
>
  <Link to='/dashboard'
    className="text-red-500 hover:text-red-600 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
  >
     <HiChartPie className='text-gray-500 dark:text-indigo-300'/>
  </Link>
  <Link to='/dashboard?tab=profile'
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
  >
        <HiUser className='text-gray-500 dark:text-indigo-300'/>
  </Link>
  <Link to='/dashboard?tab=posts'
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
  >
        <HiInbox className='text-gray-500 dark:text-indigo-300'/>
  </Link>
  <Link
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
  >
          <PiPowerBold className='text-pink-500 '/>
  </Link>
</div>

</>
  )
}


export default DashSidebar