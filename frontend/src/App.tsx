import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HeadComp from './components/HeadComp';

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex justify-center items-center">
          <HeadComp />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/auth' element={<Authentication />} />
            {/* <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;