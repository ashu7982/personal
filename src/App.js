

import React, { useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import { AuthContext, AuthProvider } from './context/AuthContext';
import Home from './components/Home';
import About from './components/About';
import General from './components/General';
import ProtectedRoute from './components/ProtectedRoutes';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Login from './components/Login';
import Layout from './components/Layout';

function App() {
  // const location = useLocation();

  // // Define a list of routes where the navigation should not be displayed
  // const noNavRoutes = ['/login'];
  // const {auth} = useContext(AuthContext)
  // console.log(auth)
  // const value = auth.isAuthenticated;
  // console.log(value)

  return (
    <Router>
      <AuthProvider>
        {/* {value ??  <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/general">General</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>} */}
        {/* <Layout/> */}
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/general">General</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav> */}

{/* {!noNavRoutes.includes(location.pathname) && (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/general">General</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      )} */}

        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element= {
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/home' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        </Routes>

      </AuthProvider>
    </Router>
  );
}

export default App;
