import React, { useState } from 'react'

import {  HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import { PiPowerBold } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoExit  } from "react-icons/io5";

import { signoutSuccess } from '../redux/user/userSlice';



function DashSidebar() {
    const {currentUser} = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch=useDispatch();


     // signout
     const handleSignout = async () => {
      try {
        const res = await fetch('/blog/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
          navigate('/');
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    

    
  return (
    <>
   



{/* large devices */}
<div className="fixed top-56 right-5 h-auto z-20  lg:block md:block hidden card w-auto bg-gray-200 dark:bg-gray-900/90  p-5 shadow-md border border-gray-500/25 backdrop-blur-md rounded-2xl">


      <Link to='/dashboard'
        className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-t-lg bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
        >
     <HiChartPie className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Dashboard
      </Link>

      <Link to='/dashboard?tab=profile'
        className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-sm bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25  text-gray-700 transition-all ease-linear"
      >
      <HiUser className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Profile
      </Link>

      {/* is admin */}
      {currentUser.isAdmin ? (
      <Link to='/dashboard?tab=posts'
      className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-sm bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
      >
      <HiInbox className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Your Posts
      </Link>):(
        <Link to='/projects'
        className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-sm bg-cover dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-600/25   text-gray-700 transition-all ease-linear"
      >
      <HiInbox className='text-purple-700 dark:text-indigo-300 mt-1'/>
        Posts
      </Link>
      )}

      <Link
      onClick={handleSignout}
      className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-b-lg bg-cover dark:text-red-500 hover:bg-red-500/25 dark:hover:bg-red-600/25   text-red-600 transition-all ease-linear"
      >
          <PiPowerBold className='text-red-600 dark:text-red-500 mt-1'/>  
        Sign out
      </Link>

</div>



{/* small devices */}
<div className="flex justify-center w-full">
<div
  className="flex items-center justify-between fixed bottom-9   h-auto w-auto z-20 lg:hidden md:hidden bg-gray-200/75 dark:bg-slate-800/75 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 border border-gray-400/25"
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
  {/* is admin */}
  {currentUser.isAdmin ? (
  <Link to='/dashboard?tab=posts'
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
  >
        <HiInbox className='text-gray-500 dark:text-indigo-300'/>
  </Link>):(
  <Link to='/projects'
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
  >
        <HiInbox className='text-gray-500 dark:text-indigo-300'/>
  </Link>)}
  
  <Link
  onClick={handleSignout}
    className="text-gray-600 hover:text-gray-800 mx-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
  >
          <IoExit  className='text-red-500 '/>
  </Link>
 </div>
</div>
</>
  )
}


export default DashSidebar