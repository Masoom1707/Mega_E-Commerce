import { Route, Routes } from "react-router-dom";
import {createContext, useState} from 'react'
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import ForgotPass from "./pages/ForgotPass";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import OrderHistory from "./pages/OrderHistory";


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
        <Route path='/productlist' exact={true} element={<ProductListingPage />} />
        <Route path='/product-details/:id' exact={true} element={<ProductDetails />} />
        <Route path='/cart' exact={true} element={<CartPage />} />
        <Route path='/checkout' exact={true} element={<CheckoutPage />} />
        <Route path='/my-account' exact={true} element={<AccountPage />} />
        <Route path='/my-orders' exact={true} element={<OrderHistory />} />
      </Routes>
      <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
export {MyContext}