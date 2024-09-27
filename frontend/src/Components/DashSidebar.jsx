import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useSelector } from 'react-redux';

function DashSidebar() {
    const currentUser = useSelector((state) => state.user);
  return (
    <>
    <Sidebar aria-label="Sidebar with logo branding example" className='fixed top-48 left-5 border-radius-5 h-100 lg:block hidden'>
       {currentUser.currentUser ? (
    <p   className="divulge font-bold text-xl text-center py-2 lg:block hidden"  >
      {currentUser.currentUser.username}  
    </p>):(<p  className='font-bold text-xl text-center lg:block hidden'>
SignIn Please...
</p>)}
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          <p className="lg:inline hidden">Dashboard</p>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
        <p className="lg:inline hidden">Profile</p>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiInbox}>
        <p className="lg:inline hidden">Posts</p>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
        <p className="font-bold text-pink-500 dark:text-pink-500 lg:inline hidden">Sign Out</p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>

  <Sidebar aria-label="Sidebar with logo branding example" className='fixed top-72 left-4 h-100 w-11 lg:hidden'>
    <Sidebar.Items className='px-3'>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiInbox}>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</>
  )
}


export default DashSidebar