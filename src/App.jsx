import { useState, lazy } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Products from './components/Products'
import { Routes, Route, Outlet } from 'react-router-dom'
// import UserList from './pages/User/UserList'
import Header from './components/Header' // Import Header component
import AuthRoutes from './routes/auth.routes'
import UserRoutes from './routes/user.routes'

function App() {
  const allRoutes = [
    ...AuthRoutes,
    ...UserRoutes
  ]
  console.log(allRoutes);

  return (
    <>
      <Header />
      <Routes>
        {
          allRoutes.map((item, index) => (
            <Route key={index} {...item} />
          ))
        }
      </Routes>
    </>
  )
}


export default App
