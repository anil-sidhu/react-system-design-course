import { Navigate } from "react-router-dom";
import Unauthorized from "../../pages/Auth/Unauthorized";

function ProtectedRoute({ children, allowedRoles }) {
//  login from token/localstorage/api
const user={login:false,role:'admin'}
// const user=undefined


  // 401 → Not logged in
  if (!user?.login) {
    return <Navigate to="/login" replace />;
  }

  // 403 → Logged in but no permission
  if (user?.role!=="admin") {
    return <Unauthorized />;
  }

  return children;
}

export default ProtectedRoute;
