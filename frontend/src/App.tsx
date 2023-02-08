import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Authentication from './components/Auth/Authentication';
import Login from './pages/Login';
import Register from './pages/Register';
import HeadComp from './components/HeadComp';

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex justify-center items-center">
          <HeadComp />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;