import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const MainLayout = () => {
  return (
    <div className='bg-[#75dacc] w-full min-h-screen'>
      <Header />
      <SideBar />

      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        Admin Main Layout
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
