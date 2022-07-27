import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

// ntl dev  yazarak netlify server ı çalıştırırız. 

// Something is already running on port 3000.   netlify ntl dev yazınca yandaki sorunu çıkarıyor.
// npx kill-port 3000          yaz ve sonra "ntl dev" yap

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
  AuthWrapper,
} from "./pages";

import PrivateRoute from "./pages/PrivateRoute";


function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
