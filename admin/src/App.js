import React, { useState } from 'react'
import Router from './routers/Router'
import publicRoutes from './routers/publicRoutes'

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  return <Router allRoutes={allRoutes} />
}

export default App
