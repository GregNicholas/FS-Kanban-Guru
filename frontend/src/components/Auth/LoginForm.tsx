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
      console.log("submit: ", userData)
      dispatch(login(userData))
  }

  const labelStyle = "uppercase block text-xs font-bold tracking-wider mb-1"
  const inputStyle = "w-50 h-7 border border-l-lines rounded-md p-1 focus:outline-main-purple focus:invalid:outline-red"

  if(isLoading) return <Loader />

  return (
    <>
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-4">Login!</h2>
      <div className="flex flex-wrap gap-x-10 gap-y-4 max-w-[40rem] inline-block">
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
    
        <p className="text-main-purple mt-4 text-sm">
            Need an account? <Link className="underline" to='/register'>
                Register
            </Link>
        </p>
    </>
  )
}
export default LoginForm