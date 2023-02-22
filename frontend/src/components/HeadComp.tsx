import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../app/store'
import {logout, reset} from '../features/auth/authSlice'

const HeadComp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {user} = useSelector((state: any) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className="w-24 h-screen bg-l-gray">
        <p>
            <Link to='/'>Dashboard</Link>
        </p>
        <ul>
            {user ? (
                <li>
                    <a className="logout" onClick={handleLogout}>
                        Logout
                    </a>
                </li>
            ) : (
                <>
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
                </>
            )}
            
        </ul>
    </header>
  )
}
export default HeadComp