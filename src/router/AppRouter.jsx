import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Navbar from "../components/blog/NavBar"
import About from "../pages/About"
import NewBlog from "../pages/NewBlog"
import NotFound from "../pages/NotFound"
import Detail from "../pages/Detail"
import PrivateRouter from "./PrivateRouter"


const AppRouter = () => {
    return (

        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
                <Route element={<PrivateRouter/>}>
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/newblog" element={<NewBlog />} />
                </Route>

            </Routes>
        </div>
    )
}

export default AppRouter