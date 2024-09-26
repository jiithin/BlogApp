import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  const location = useLocation()
  const [tab,setTab]=useState('')
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tab = urlParams.get('tab')
  },[location.search])
  return (
    <>
        <div><p id='head'>Dashboard</p></div>
    <div className="p-5">
      {/* sidebar */}
    </div>
    <div className="p-5">
      {/* profile */}
    </div>
    </>

  )
}

export default Dashboard