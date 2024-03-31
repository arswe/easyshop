import React, { useEffect, useState } from 'react'
import { getRoutes } from './routers'
import Router from './routers/Router'
import publicRoutes from './routers/publicRoutes'

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])

  useEffect(() => {
    const routes = getRoutes()
    setAllRoutes([...allRoutes, routes])
  }, [setAllRoutes, allRoutes])

  return <Router allRoutes={allRoutes} />
}

export default App
