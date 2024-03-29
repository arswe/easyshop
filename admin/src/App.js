import React, { useState } from 'react'
import Router from './routers/Router'
import publicRoutes from './routers/publicRoutes'

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])

  console.log(allRoutes)
  return <Router allRoutes={allRoutes} />
}

export default App
