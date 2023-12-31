import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import {Store} from './Components/Store';
import About from './Components/About';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import { CartContext, CartProvider } from './Components/CartContext';
import ContactUs from './Components/ContactUs';
import ProductPage from './Components/ProductPage';
import AuthForm from './Components/AuthForm';
import Profile from './Components/Profile';
import { AuthContext } from './Components/auth-context';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <CartProvider value={{ cart, addToCart: setCart }}>
        <div>
          <Header />
          <h2 className="store__generics">The Generics</h2>
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/store"
              element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={isLoggedIn ? <About /> : <Navigate to="/login" />}
            />
            <Route
              path="/contact"
              element={isLoggedIn ? <ContactUs /> : <Navigate to="/login" />}
            />
            <Route
              path="/product/:productId"
              element={isLoggedIn ? <ProductPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/cart"
              element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!isLoggedIn ? <AuthForm /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
