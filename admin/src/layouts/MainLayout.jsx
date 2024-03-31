import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const MainLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className='bg-[#75dacc] w-full min-h-screen'>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        Admin Main Layout
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
