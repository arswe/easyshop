import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getNav } from '../components/common'

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
          <ul>
            {allNavs.map((nav) => (
              <li key={nav.id} className='flex items-center'>
                <Link to={nav.path} className='flex items-center w-full'>
                  <div className='w-[40px] h-[40px] flex justify-center items-center'>
                    {nav.icon}
                  </div>
                  <p className='text-white'>{nav.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
