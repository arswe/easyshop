import MainLayout from '../layouts/MainLayout'
import { privateRoutes } from './privateRoutes'

export const getRoutes = () => {
  return {
    path: '/',
    element: <MainLayout />,
    children: privateRoutes,
  }
}
