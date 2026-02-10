import { lazy } from "react";
import UserAdd from "../pages/User/UserAdd";
import UserDelete from "../pages/User/UserDelete";
// import UserList from "../pages/User/UserList";
import UserUpdate from "../pages/User/UserUpdate";
const UserList =lazy(()=>import('../pages/User/UserList'))

const UserRoutes=[
    { path:"user-add",element:<UserAdd />},
    { path:"user-list",element:<UserList />},
    { path:"user-update",element:<UserUpdate />},
    { path:"user-delete",element:<UserDelete />},

]

export default UserRoutes