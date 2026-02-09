import { lazy } from "react";
import UserAdd from "../pages/User/UserAdd";
import UserDelete from "../pages/User/UserDelete";
import UserUpdate from "../pages/User/UserUpdate";
const UserList = lazy(()=>import('../pages/User/UserList'))

const UserRoutes = [
    { path: 'user-list', element: <UserList /> },
    { path: 'user-add', element: <UserAdd /> },
    { path: 'user-delete', element: <UserDelete /> },
    { path: 'user-update', element: <UserUpdate /> },
]

export default UserRoutes; 