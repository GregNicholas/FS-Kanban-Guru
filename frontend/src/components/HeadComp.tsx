import { Link } from 'react-router-dom'

const HeadComp = () => {
  return (
    <header className="w-48 h-screen bg-l-gray">
        <p>
            <Link to='/'>Dashboard</Link>
        </p>
        <ul>
            <li>
                <Link to='/auth' state={{ action: "login" }}>
                    Login
                </Link>
            </li>
            <li>
                <Link to='/auth' state={{ action: "register" }}>
                    register
                </Link>
            </li>
        </ul>
    </header>
  )
}
export default HeadComp