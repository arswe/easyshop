import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const [allNavs, setAllNavs] = useState([])

  useEffect(() => {
    const navs = getNav('admin')
  }, [])
  return (
    <div>
      <div></div>
      <div
        className={`w-[260px] fixed bg-slate-400 z-50 top-0 h-screen shadow-[0_0_15px_0_rgba(34_41)47_/_5%)] transition-all`}
      >
        <div className='h-[70px] flex justify-center items-center'>
          <Link to='/' className='w-[180px] h-[50px]'>
            <img
              src='http://localhost:3000/images/logo.png'
              alt='logo'
              className='w-full h-full object-contain'
            />
          </Link>
        </div>

        <div className='mt-5'>
          <Link to='/admin/dashboard' className='block px-4 py-3'>
            Dashboard
          </Link>
          <Link to='/admin/products' className='block px-4 py-3'>
            Products
          </Link>
          <Link to='/admin/orders' className='block px-4 py-3'>
            Orders
          </Link>
          <Link to='/admin/users' className='block px-4 py-3'>
            Users
          </Link>
          <Link to='/admin/settings' className='block px-4 py-3'>
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
