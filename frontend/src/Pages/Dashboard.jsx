import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';
import DashPosts from '../Components/DashPosts';

import { FaArrowTrendUp } from "react-icons/fa6";
import { TbUser, TbUserUp } from "react-icons/tb";
import { LiaCommentSolid } from "react-icons/lia";
import { MdPostAdd } from "react-icons/md";

function Dashboard() {
  //to get each tab copmonent from click
  const location = useLocation();
  const [tab,setTab]=useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get('tab');
    if (tabFormUrl){
      setTab(tabFormUrl);
    }
  },[location.search]);

  return (
    <div className='min-h-screen mt-10'>
       {/* statistcs */}
       {!(tab==='profile' || tab==='posts') &&
       <div className="flex-1 bg-transparent rounded-lg mt-4 p-8">
                    {/* <h4 className="text-xl text-purple-800/75 dark:text-purple-300 font-mono font-bold ">Dashboard</h4> */}
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-8 mt-4">
                      {/* total users */}
                        <div className="px-6 py-6 bg-gray-100 dark:bg-blue-950/25 border border-gray-400/25 rounded-xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-indigo-600">Total Users</span>
                                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"><TbUser/></span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div>
                                <div className="flex items-left">
                                        <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
                                        <div className="flex items-center ml-2 mb-1">
                                        <FaArrowTrendUp className='text-green-500'/>
                                            <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                        </div>   
                                    </div>
                                    <p>Last Month</p>
                                </div>
                            </div>
                        </div>

                        {/* total comments */}
                        <div className="px-6 py-6 bg-gray-100 dark:bg-blue-950/25 border border-gray-400/25 rounded-xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-blue-600">Total Comments</span>
                                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"><LiaCommentSolid /></span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div>
                                <div className="flex items-left">
                                        <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
                                        <div className="flex items-center ml-2 mb-1">
                                        <FaArrowTrendUp className='text-green-500'/>
                                            <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                        </div>   
                                    </div>
                                    <p className='text-gray-400'>Last Month</p>
                                </div>
                            </div>
                        </div>

                        {/* total posts */}
                        <div className="px-6 py-6 bg-gray-100 dark:bg-blue-950/25 border border-gray-400/25 rounded-xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-purple-600">Total Posts</span>
                                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"><MdPostAdd/></span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div>
                                <div className="flex items-left">
                                        <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
                                        <div className="flex items-center ml-2 mb-1">
                                        <FaArrowTrendUp className='text-green-500'/>
                                            <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                        </div>   
                                    </div>
                                    <p className='text-gray-400'>Last Month</p>
                                </div>
                            </div>
                        </div>

                        {/* recent users */}
                        <div className="px-6 py-6 bg-gray-100 dark:bg-blue-950/25 border border-gray-400/25 rounded-xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-indigo-500">Recent Users</span>
                                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"><TbUserUp /></span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div>
                                <div className="flex items-left">
                                        <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
                                        <div className="flex items-center ml-2 mb-1">
                                        <FaArrowTrendUp className='text-green-500'/>
                                            <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                        </div>   
                                    </div>
                                    <p className='text-gray-400'>Last Month</p>
                                </div>
                            </div>
                        </div>

                        {/* recent comments */}
                        <div className="px-6 py-6 bg-gray-100 dark:bg-blue-950/25 border border-gray-400/25 rounded-xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-blue-500">Recent Comments</span>
                                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"><LiaCommentSolid /></span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div>
                                <div className="flex items-left">
                                        <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
                                        <div className="flex items-center ml-2 mb-1">
                                        <FaArrowTrendUp className='text-green-500'/>
                                            <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                        </div>   
                                    </div>
                                    <p className='text-gray-400'>Last Month</p>
                                </div>
                            </div>
                        </div>
                        {/* recent posts */}
                        <div className="px-6 py-6 bg-gray-100 dark:bg-blue-950/25 border border-gray-400/25 rounded-xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-purple-500">Recent Posts</span>
                                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"><MdPostAdd/></span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div>
                                <div className="flex items-left">
                                        <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
                                        <div className="flex items-center ml-2 mb-1">
                                        <FaArrowTrendUp className='text-green-500'/>
                                            <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                        </div>   
                                    </div>
                                    <p className='text-gray-400'>Last Month</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>}

              
        
    <div className="sidebar">
      {/* sidebar */}
      <DashSidebar/>
    </div>

    <div className="profile">
      {/* profile */}
      {tab==='profile' && <DashProfile/>}
    </div>

    <div className="posts">
      {/* profile */}
      {tab==='posts' && <DashPosts/>}
    </div>
    </div>

  )
}

export default Dashboard