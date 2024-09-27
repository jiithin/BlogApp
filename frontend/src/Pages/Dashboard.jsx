import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';

function Dashboard() {
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
        
    <div className="sidebar">
      {/* sidebar */}
      <DashSidebar/>
    </div>
    <div className="profile">
      {/* profile */}
      {tab==='pofile' && <DashProfile/>}
    </div>
    </div>

  )
}

export default Dashboard