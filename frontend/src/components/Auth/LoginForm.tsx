import {useState, useEffect} from 'react'
import Button from "../Button"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const {name, email, password} = formData

  const onChange = () => {

  }

  const labelStyle = "uppercase block text-xs font-bold tracking-wider mb-1"
  const inputStyle = "w-50 h-7 border border-l-lines rounded-md p-1 focus:outline-main-purple focus:invalid:outline-red"

  return (
    <>
    <form>
      <h2 className="text-2xl font-bold mb-4">Login!</h2>
      <div className="flex flex-wrap gap-x-10 gap-y-4 max-w-[40rem] inline-block">
        <div className='form-group'>
            <label className={labelStyle} htmlFor="email">email</label>
            <input
            type='email'
            className={inputStyle}
            id='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
            />
        </div>
        <div className='form-group'>
            <label className={labelStyle} htmlFor="password">password</label>
            <input
            type='password'
            className={inputStyle}
            id='password'
            value={password}
            placeholder='Enter your password'
            onChange={onChange}
            />
        </div>
      </div>
    </form>
    <div className="w-60 mt-4 mx-auto">
      <Button text="Create Account" onClick={() => console.log("login click")} primary={true} />
    </div>
        <p className="text-main-purple mt-4 text-sm">
            Already have an account? <a className="underline" href="#">Login</a>
        </p>
    </>
  )
}
export default LoginForm