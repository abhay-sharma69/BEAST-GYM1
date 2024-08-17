import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>STRIKE</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Classes</li>
        <li>Membership</li>
        <li>Shop</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <div className="cart-container">
          <img src={cart_icon} alt="Cart" className="cart-image" />
          <div className="cart-counter">0</div> {/* Replace '0' with dynamic value if needed */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
