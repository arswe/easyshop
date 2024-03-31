import React, { useEffect, useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { getNav } from '../components/common/getNav'

const SideBar = () => {
  const { pathname } = useLocation()
  const [allNavs, setAllNavs] = useState([])

  useEffect(() => {
    const navs = getNav('admin')
    setAllNavs(navs)
  }, [])

  console.log(allNavs)
  return (
    <div>
      <div></div>
      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all `}
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

        <div className='px-[16px]'>
          <ul>
            {allNavs.map((nav) => (
              <li key={nav.id} className='flex items-center'>
                <Link
                  to={nav.path}
                  className={`${
                    pathname === nav.path
                      ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500'
                      : 'text-[#030811] font-bold duration-200 '
                  } 
                  px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                >
                  <div className='w-[40px] h-[40px] flex justify-center items-center'>
                    {nav.icon}
                  </div>
                  <p>{nav.title}</p>
                </Link>
              </li>
            ))}
            <li>
              <button className='text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
                <div className='w-[40px] h-[40px] flex justify-center items-center'>
                  <BiLogOut />
                </div>
                <p>Logout</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
