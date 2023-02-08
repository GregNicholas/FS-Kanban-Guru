import {useState, useEffect} from 'react'
import Authentication from '../components/Auth/Authentication'
import LoginForm from '../components/Auth/LoginForm'
import Button from "../components/Button"

const Login = () => {
  return (
    <>
    <Authentication>
      <LoginForm />
    </Authentication>
    </>
  )
}
export default Login