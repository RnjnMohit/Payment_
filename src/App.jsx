import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useState } from 'react'
import Navbar from './components/Navbar_setup/Navbar';
import Profilepage from './components/Profilepage/Profilepage';


function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} /> 
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} /> 
        <Route path='/profile' element={<Profilepage/>} /> 

      </Routes>
    </>
  )
}

export default App
