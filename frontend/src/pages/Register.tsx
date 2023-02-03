import {useState, useEffect} from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  })

  const {name, email, password, confirmPass} = formData

  return (
    <>
      <section>
      <h1>Register Form</h1>
      </section>
    </>
  )
}
export default Register