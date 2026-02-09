import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header' 

// Auth Pages
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import ForgetPassword from './pages/Auth/ForgetPassword'

// User Pages
import UserAdd from './pages/User/UserAdd'
import UserDelete from './pages/User/UserDelete'
import UserUpdate from './pages/User/UserUpdate'
const UserList = lazy(()=>import('./pages/User/UserList'))

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-add" element={<UserAdd />} />
        <Route path="/user-delete" element={<UserDelete />} />
        <Route path="/user-update" element={<UserUpdate />} />
      </Routes>
    </>
  )
}


export default App
