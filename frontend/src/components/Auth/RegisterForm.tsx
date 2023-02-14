import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Loader from '../../components/Loader'
import {register, reset} from '../../features/auth/authSlice'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  })

  const {name, email, password, confirmPass} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

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
        
        if(password !== confirmPass){
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            console.log("submit: ", userData)
            dispatch(register(userData) as any)
        }
    }

  const labelStyle = "uppercase block text-xs font-bold tracking-wider mb-1"
  const inputStyle = "w-50 h-7 border border-l-lines rounded-md p-1 focus:outline-main-purple focus:invalid:outline-red"

  if(isLoading) {
    return <Loader />
  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-4">Create an account!</h2>
      <div className="flex flex-wrap gap-x-10 gap-y-4 max-w-[40rem] inline-block">
      <div className='form-group'>
        <label className={labelStyle} htmlFor="name">name</label>
        <input
          type='text'
          name='name'
          className={inputStyle}
          id='name'
          value={name}
          placeholder='Enter your name'
          onChange={onChange}
          required
        />
      </div>
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
          required
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
          required
        />
      </div>
      <div className='form-group'>
        <label className={labelStyle} htmlFor="confirmPass">confirm password</label>
        <input
          type='password'
          name='confirmPass'
          className={inputStyle}
          id='confirmPass'
          value={confirmPass}
          placeholder='Confirm password'
          onChange={onChange}
          required
        />
      </div>
      </div>
      <div className="w-60 mt-4 mx-auto">
        <Button type="submit" text="Create Account" onClick={() => console.log("register clicked")} primary={true} />
      </div>
    </form>
    
        <p className="text-main-purple mt-4 text-sm">
            Already have an account? <Link className="underline" to='/login'>
                Login
            </Link>
        </p>
    </>
  )
}
export default RegisterForm