import { lazy } from 'react'

const AdminLogin = lazy(() => import('../auth/AdminLogin'))
const Login = lazy(() => import('../auth/Login'))
const Register = lazy(() => import('../auth/Register'))

const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/admin/login', element: <AdminLogin /> },
]

export default publicRoutes
