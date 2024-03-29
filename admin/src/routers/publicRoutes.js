import { lazy } from 'react'

const Login = lazy(() => import('../auth/Login'))
const Register = lazy(() => import('../auth/Register'))

const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]

export default publicRoutes
