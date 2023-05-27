import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const [user, loading] = useAuthState(auth);
  const location = useLocation();

  // if(loading){
  //     return <Loading></Loading>
  // }
  const token = localStorage.getItem('token')
  // console.log('token============',token)
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
