import React from 'react'
import { FaList } from 'react-icons/fa'

const Header = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#e9baba] px-5 transition-all'>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className='w-[35px] flex lg:hidden h-[35px] rounded-md bg-cyan-300 shadow-lg hover:shadow-cyan-500/50 justify-center items-center cursor-pointer '
        >
          <span>
            <FaList />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
