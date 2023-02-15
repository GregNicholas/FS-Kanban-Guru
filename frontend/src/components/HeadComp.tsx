import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../app/store'
import {logout} from '../features/auth/authSlice'

const HeadComp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  return (
    <header className="w-48 h-screen bg-l-gray">
        <p>
            <Link to='/'>Dashboard</Link>
        </p>
        <ul>
            <li>
                <Link to='/login'>
                    Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    Register
                </Link>
            </li>
            <li>
                <Link to='/login' onClick={() => dispatch(logout())}>
                    Logout
                </Link>
            </li>
        </ul>
    </header>
  )
}
export default HeadComp