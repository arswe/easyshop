import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))

export const sellerRoutes = [
  { path: '/seller', element: Home, abilities: ['admin', 'seller'] },
]
