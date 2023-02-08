import {useState, useEffect} from 'react'
import Authentication from '../components/Auth/Authentication'
import RegisterForm from '../components/Auth/RegisterForm'
import Button from "../components/Button"

const Register = () => {
  return (
    <>
    <Authentication>
      <RegisterForm />
    </Authentication>
    </>
  )
}
export default Register