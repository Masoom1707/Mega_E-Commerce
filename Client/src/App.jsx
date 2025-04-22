import { Route, Routes } from "react-router-dom";
import {createContext, useState} from 'react'
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPass from "./pages/ForgotPass";


 const MyContext = createContext()

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const values = {
    isLoggedIn, 
    setIsLoggedIn
  }



  return (
    <>
    <MyContext.Provider value={values}>
      <Header/>
      <Routes>
        <Route path='/' exact={true}  element={<Home />} />
        <Route path='/login' exact={true} element={<LoginPage />} />
        <Route path='/signup' exact={true} element={<RegisterPage />} />
        <Route path='/verify' exact={true} element={<ForgotPass />} />
      </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
export {MyContext}