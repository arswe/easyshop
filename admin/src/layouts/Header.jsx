import React from 'react'
import { FaList } from 'react-icons/fa'

const Header = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#bae9e5] px-5 transition-all'>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className='w-[35px] flex lg:hidden h-[35px] rounded-md bg-cyan-300 shadow-lg hover:shadow-cyan-500/50 justify-center items-center cursor-pointer '
        >
          <span>
            <FaList />
          </span>
        </div>

        <div className='hidden md:block'>
          <input
            className='px-3 py-2 border bg-transparent rounded-md text-[#423d72] focus:border-indigo-300 overflow-hidden outline-none'
            type='text'
            name='search'
            placeholder='search'
          />
        </div>

        <div className='flex justify-center items-center gap-8 relative'>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3'>
              <div className='flex justify-center items-center flex-col text-end'>
                <p className='text-[#423d72] font-bold'>AbdurRahman</p>
                <p className='text-[#5072e2] '>Admin</p>
              </div>
              <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                <img
                  src='http://localhost:3000/images/admin.jpg'
                  alt=''
                  className='w-full h-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
