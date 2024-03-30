import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { adminLogin, messageClear } from '../store/reducers/authReducer'

const AdminLogin = () => {
  const [state, setState] = useState({ email: '', password: '' })

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  )

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(adminLogin(state))
  }

  const overideStyle = {
    display: 'flex',
    height: '24px',
    margin: '0 auto',
    justifyContent: 'center',
    itemsAlign: 'center',
    alignItems: 'center',
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    if (successMessage) {
      toast.success(successMessage)
      dispatch(messageClear())
      navigate('/')
    }
  }, [errorMessage, dispatch, successMessage, navigate])

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae1] flex justify-center items-center '>
      <div className='w-96 text-[#ffffff] p-2'>
        <div className='bg-[#7f97bb] p-6 rounded-md'>
          <div className='has-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
              <img
                className='w-full h-full'
                src='http://localhost:3000/images/logo.png'
                alt='logo'
              />
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className='col-span-full mb-3'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-white'
              >
                Email
              </label>
              <div>
                <input
                  onChange={inputHandler}
                  value={state.email}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                  className=' px-2  block w-full bg-transparent  rounded-md outline-none border-slate-400 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full mb-3'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-white'
              >
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
                disabled={loader ? true : false}
                type='submit'
                className='w-full font-bold bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {loader ? (
                  <>
                    <PropagateLoader color='white' cssOverride={overideStyle} />
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
