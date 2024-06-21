import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();
    const items = useCart();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          setIsAuthenticated(true);
      } else {
          setIsAuthenticated(false);
      }
  }, []);

  useEffect(() => {
      const handleStorageChange = () => {
          const token = localStorage.getItem('token');
          if (token) {
              setIsAuthenticated(true);
          } else {
              setIsAuthenticated(false);
          }
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
          window.removeEventListener('storage', handleStorageChange);
      };
  }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate("/login");
    };

    const loadCart = () => {
        setCartView(true);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                            {isAuthenticated && (
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder">My Orders</Link>
                                </li>
                            )}
                        </ul>
                        {!isAuthenticated ? (
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                            </form>
                        ) : (
                            <div>
                                <div className="btn bg-white text-success mx-2" onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>
                                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                                <button onClick={handleLogout} className="btn bg-white text-success">Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}