import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useState } from 'react'
import Navbar from './components/Navbar_setup/Navbar';
import Profilepage from './components/Profilepage/Profilepage';
import Wallet from './pages/Wallet'

function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} /> 
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        {
          isLoggedIn ? (
            <Route path='/profile' element={<Profilepage setIsLoggedIn={setIsLoggedIn}/>} /> 

          ) : (
            <Route path="/profile" element={<Navigate to='/login' replace/>}/>
          )
        }
        <Route path='/wallet' element={<Wallet />} />
      </Routes>
    </>
  )
}

export default App
