import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useState } from 'react'
import Navbar from './components/Navbar_setup/Navbar';
import Profilepage from './components/Profilepage/Profilepage';

import { CookiesProvider, useCookies } from "react-cookie";
import CookieState from './context/cookie/cookieState'
import Wallet from './pages/Wallet';

function App() {
  const [cookies, setCookie,removeCookie] = useCookies(["login"]);
  
  
  function settingCookie(e){
    e?setCookie("login",e,{path: "/"}):removeCookie("login");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.login!=undefined?true:false);

  return (
    <>

      <CookiesProvider>
        <CookieState>
          <Navbar isLoggedIn={isLoggedIn} settingCookie={settingCookie} setIsLoggedIn={setIsLoggedIn} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login'  element={<Login settingCookie={settingCookie} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
            {
              isLoggedIn ? (
                <Route path='/profile' element={<Profilepage setIsLoggedIn={setIsLoggedIn} />} />


              ) : (
                <Route path="/profile" element={<Navigate to='/login' replace />} />
              )
            }
            <Route path='/wallet' element={<Wallet />} />
          </Routes>
        </CookieState>
      </CookiesProvider>
    </>
  )
}

export default App
