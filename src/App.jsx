import { useState } from 'react';
import './App.css'
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>

    </>
  )
}

export default App
