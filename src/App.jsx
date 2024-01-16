import { useState } from 'react';
import './App.css'
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { set } from 'rsuite/esm/utils/dateUtils';
import Login from './pages/Login';
import Profilepage from './components/Profilepage/Profilepage';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>

      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes> */}
      <Profilepage/>

    </>
  )
}

export default App
