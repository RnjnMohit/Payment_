
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} /> 
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} /> 

      </Routes>
    </>
  )
}

export default App
