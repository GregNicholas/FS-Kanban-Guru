import { useState } from "react"
import { useLocation } from 'react-router-dom'
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"

const Authentication = () => {
    const location = useLocation()
    const { action } = location.state
    const [formDisplay, setFormDisplay] = useState(action || "login")
  
  console.log("location state action? ", action, formDisplay)

  return (
    <>
        {action === "register" ? <Register /> : <Login />}
    </>
  )
}
export default Authentication