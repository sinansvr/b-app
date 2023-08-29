import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"

const PrivateRouter = () => {

const {currentUser}= useSelector(state=>state.auth)

  return currentUser ? <Outlet/> : <Navigate to="login"/>
}

export default PrivateRouter