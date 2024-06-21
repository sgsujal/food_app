import React from 'react';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';  // npm i bootstrap-dark-5 bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import './App.css';
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
