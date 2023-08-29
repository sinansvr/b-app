import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { notify } from "../helper/sweetAlert"


const useAuthCall = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const login = async (userData) => {
    dispatch(fetchStart())
    const BASE_URL = "http://34164.fullstack.clarusway.com"

    try {
      const { data } = await axios.post(`${BASE_URL}/users/auth/login/`, userData)
      dispatch(loginSuccess(data))
      navigate("/")
      notify("Successfully logged in!","success")

    } catch (error) {
      dispatch(fetchFail())
      notify("Can not be  logged in!","error")
    }
  }

  const logout = async (userData) => {
    dispatch(fetchStart())
    const BASE_URL = "http://34164.fullstack.clarusway.com"

    try {
      const { data } = await axios.post(`${BASE_URL}/users/auth/logout/`, userData)
      dispatch(loginSuccess(data))
      navigate("/")     
      notify("Successfully logged out!","success")

    } catch (error) {
      dispatch(fetchFail())      
      notify("Can not be  logged out!","error")
    }
  }

  const register = async (userData) => {
    const BASE_URL = "http://34164.fullstack.clarusway.com"
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(`${BASE_URL}/users/register/`, userData)
      dispatch(registerSuccess(data))
      navigate("/")
      notify("Successfully registered!","success")
      
    } catch (error) {
      dispatch(fetchFail())      
      notify("Can not be registered!","error")
    }
  }


  return { login, logout, register }
}

export default useAuthCall