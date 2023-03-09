import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from "../Button"
import Loader from '../../components/Loader'
import {login, reset} from '../../features/auth/authSlice'
import {toast} from 'react-toastify'
import { AppDispatch } from '../../app/store'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const {name, email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state: any) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const userData = {
          email,
          password
      }
      dispatch(login(userData))
  }

  const labelStyle = "uppercase block text-xs font-bold tracking-wider mb-1"
  const inputStyle = "w-full h-10 border border-l-lines rounded-md p-2 focus:outline-main-purple focus:invalid:outline-red"

  if(isLoading) return <Loader />

  return (
    <>
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-4">Login!</h2>
      <div className="flex flex-col flex-wrap gap-x-10 gap-y-4 max-w-[40rem] inline-block">
        <div className='form-group'>
            <label className={labelStyle} htmlFor="email">email</label>
            <input
            type='email'
            name='email'
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
            name='password'
            className={inputStyle}
            id='password'
            value={password}
            placeholder='Enter your password'
            onChange={onChange}
            />
        </div>
      </div>
      <div className="w-60 mt-4 mx-auto">
        <Button type="submit" text="Login" primary={true} />
      </div>
    </form>
    <div className="flex flex-col md:flex-row md:justify-between gap-x-2 items-center">
      <p className="text-main-purple mt-4 text-sm inline-block">
          Need an account?<Link className="underline ml-2" to='/register'>
              Register
          </Link>
      </p>
      <p className="text-main-purple mt-4 text-sm inline-block">
        Want a testdrive? 
        <a className="underline font-bold text-lg ml-2 text-red cursor-pointer" 
            onClick={() => dispatch(login({email: "demo@demo.com", password: "secret"}))}
        >
          Demo Login
        </a>
      </p>
    </div>
    </>
  )
}
export default LoginForm