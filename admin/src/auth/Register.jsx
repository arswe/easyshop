import React from 'react'

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae1] flex justify-center items-center '>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#102749] p-4 rounded-md'>
          <h1 className='text-xl font-bold text-center mb-3 '>Welcome to Ecommerce </h1>
          <p>please register to continue your account</p>
          <form action=''>
            <div className='col-span-full mb-3'>
              <label htmlFor='name' className='block text-sm font-medium leading-6 text-white'>
                Name
              </label>
              <div>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='off'
                  placeholder='Name'
                  required
                  className=' px-2 block w-full bg-transparent rounded-md outline-none border-slate-400 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='col-span-full mb-3'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>
                Email
              </label>
              <div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='off'
                  placeholder='Email'
                  required
                  className=' px-2  block w-full bg-transparent  rounded-md outline-none border-slate-400 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full mb-3'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-white'>
                Password
              </label>
              <div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  autoComplete='password'
                  placeholder='Password'
                  required
                  className='px-2 block w-full bg-transparent  rounded-md outline-none border-slate-400 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='flex h-6 items-center'>
              <input
                id='candidates'
                name='candidates'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 overflow-hidden focus:ring-2 focus:ring-offset-0 focus:ring-offset-slate-100 focus:ring-opacity-50 focus:outline-none'
              />
              <label htmlFor='candidates' className='ml-2 block text-sm text-white font-bold'>
                I agree to the terms and conditions
              </label>
            </div>
            <div className='mt-4'>
              <button
                type='submit'
                className='w-full font-bold bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sing Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
