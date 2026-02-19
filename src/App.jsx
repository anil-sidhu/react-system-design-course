
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header' 
import AutRoutes from './routes/auth.routes'
import UserRoutes
 from './routes/user.routes'
import OtherRoutes from './routes/Other.routes'
function App() {
  const allRoutes=[
    ...AutRoutes,
    ...UserRoutes,
    ...OtherRoutes
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
