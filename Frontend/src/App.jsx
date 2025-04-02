import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact={true}  element={<Home />} />
        <Route path='/login' exact={true} element={<LoginPage />} />
        <Route path='/signup' exact={true} element={<RegisterPage />} />
        <Route path='/productlist' exact={true} element={<ProductListingPage />} />
        <Route path='/product-details/:id' exact={true} element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
