import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' })

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(state)
  }
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae1] flex justify-center items-center '>
      <div className='w-96 text-[#ffffff] p-2'>
        <div className='bg-[#102749] p-6 rounded-md'>
          <h1 className='text-4xl font-bold text-center mb-1 '>Welcome to Easyshop </h1>
          <p className='mb-4'>please login to your account to continue</p>
          <form onSubmit={submitHandler}>
            <div className='col-span-full mb-3'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>
                Email
              </label>
              <div>
                <input
                  onChange={inputHandler}
                  value={state.email}
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='off'
                  placeholder='Email'
                  required
                  className=' px-2  block w-full bg-transparent  rounded-md outline-none border-slate-400 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full mb-3'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-white'>
                Password
              </label>
              <div>
                <input
                  onChange={inputHandler}
                  value={state.password}
                  type='password'
                  name='password'
                  id='password'
                  autoComplete='password'
                  placeholder='Password'
                  required
                  className='px-2 block w-full bg-transparent  rounded-md outline-none border-slate-400 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='mt-4'>
              <button
                type='submit'
                className='w-full font-bold bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sing in
              </button>

              <div>
                <p className='text-center mt-4'>
                  Don't have an account?{' '}
                  <Link to='/register' className='text-blue-500 hover:text-indigo-700'>
                    Sign Up
                  </Link>
                </p>
              </div>

              <div className='w-full flex justify-center items-center mb-3'>
                <div className='w-[45%] bg-slate-500 h-[1px]'></div>
                <div className='w-[10%] flex justify-center items-center'>
                  <span>OR</span>
                </div>
                <div className='w-[45%] bg-slate-500 h-[1px]'></div>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <div className='w-40 h-8 rounded-md bg-orange-600/50 flex justify-center items-center'>
                  <button type='button' className='text-sm font-semibold leading-6 '>
                    <FaGoogle />
                  </button>
                  <span></span>
                </div>
                <div className='w-40 h-8 rounded-md bg-blue-600 flex justify-center items-center'>
                  <button type='button' className='text-sm font-semibold leading-6 '>
                    <FaFacebook />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
