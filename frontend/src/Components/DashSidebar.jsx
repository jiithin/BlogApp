import React, { useEffect, useState } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function DashSidebar() {
    const currentUser = useSelector((state) => state.user);
    const location = useLocation();
  return (
    <>
    <Sidebar aria-label="Sidebar with logo branding example" className='fixed top-48 left-5 h-100  lg:block hidden'>
       {currentUser.currentUser ? (
    <p   className="divulge font-bold text-xl text-center py-2 lg:block hidden"  >
      {currentUser.currentUser.username}  
    </p>):(<p  className='font-bold text-xl text-center lg:block hidden'>
SignIn Please...
</p>)}
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Link to='/dashboard'>
        <Sidebar.Item  icon={HiChartPie}>
          <p className="lg:inline hidden">Dashboard</p>
        </Sidebar.Item>
        </Link>
        
        <Link to='/dashboard?tab=profile'>
        <Sidebar.Item icon={HiUser}>
        <p className="lg:inline hidden">Profile</p>
        </Sidebar.Item>
        </Link>
        
        <Link to='/dashboard?tab=posts'>
        <Sidebar.Item  icon={HiInbox}>
        <p className="lg:inline hidden">Posts</p>
        </Sidebar.Item>
        </Link>
        
        <Sidebar.Item  icon={HiArrowSmRight}>
        <p className="font-bold text-pink-500 dark:text-pink-500 lg:inline hidden">Sign Out</p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>

  <Sidebar aria-label="Sidebar with logo branding example" className='fixed top-72 left-4 h-100 w-11 lg:hidden '>
    <Sidebar.Items>
      <Sidebar.ItemGroup>

      <Link to='/dashboard'>
        <Sidebar.Item >
        <HiChartPie className='text-gray-500 dark:text-indigo-300'/>
        </Sidebar.Item>
      </Link>

      <Link to='/dashboard?tab=profile'>
        <Sidebar.Item >
        <HiUser className='text-gray-500 dark:text-indigo-300'/>
        </Sidebar.Item>
       </Link>

       <Link to='/dashboard?tab=posts'>
        <Sidebar.Item >
        <HiInbox className='text-gray-500 dark:text-indigo-300'/>
        </Sidebar.Item>
       </Link>

        <Sidebar.Item >
          <HiArrowSmRight className='text-pink-500 '/>
        </Sidebar.Item>

      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</>
  )
}


export default DashSidebar