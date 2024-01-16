<<<<<<< HEAD
import { useState } from 'react';
import './App.css'
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { set } from 'rsuite/esm/utils/dateUtils';
import Login from './pages/Login';
import Profilepage from './components/Profilepage/Profilepage';
=======
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useState } from 'react'
<<<<<<< HEAD
import Navbar from './components/Navbar_setup/Navbar'
=======
import Navbar from './components/Navbar_setup/Navbar';
>>>>>>> 91aa5f79754157a3e0b7e1da2d22d54e4075642e
>>>>>>> 039846900d63bf693911f345390124362604c743


function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>

<<<<<<< HEAD
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes> */}
      <Profilepage/>
=======
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
>>>>>>> 91aa5f79754157a3e0b7e1da2d22d54e4075642e

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} /> 
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} /> 

      </Routes>
    </>
  )
}

export default App
