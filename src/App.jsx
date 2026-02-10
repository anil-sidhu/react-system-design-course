
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header' 
import AutRoutes from './routes/auth.routes'
import UserRoutes
 from './routes/user.routes'
function App() {
  const allRoutes=[
    ...AutRoutes,
    ...UserRoutes
  ]
  console.log(allRoutes);
  
  return (
    <>
      <Header />
      <Routes>
        {
          allRoutes.map((item,index)=>(
            <Route key={index} {...item}  />
          ))
        }
      </Routes>
    </>
  )
}


export default App
