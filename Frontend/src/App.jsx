import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact={true}  element={<Home />} />
        <Route path='/productlist' exact={true} element={<ProductListingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
