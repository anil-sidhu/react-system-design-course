import { lazy, Suspense } from "react";
import UserAdd from "../pages/User/UserAdd";
import UserDelete from "../pages/User/UserDelete";
// import UserList from "../pages/User/UserList";
import UserUpdate from "../pages/User/UserUpdate";
import ProtectedRoute from "../components/auth/ProtectedRoute";
const UserList =lazy(()=>import('../pages/User/UserList'))
import SuspenseLoader from '../components/SuspenseLoader'

const UserRoutes=[
    { path:"user-add",element:<UserAdd />},
    { path:"user-list",element:
        <ProtectedRoute>
     <Suspense fallback={<SuspenseLoader />}>
 <UserList />
        </Suspense>
   
    </ProtectedRoute>
},
    { path:"user-update",element:<UserUpdate />},
    { path:"user-delete",element:<UserDelete />},

]

export default UserRoutes