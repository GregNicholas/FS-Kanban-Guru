import { Link } from 'react-router-dom'

const HeadComp = () => {
  return (
    <header>
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
                    register
                </Link>
            </li>
        </ul>
    </header>
  )
}
export default HeadComp