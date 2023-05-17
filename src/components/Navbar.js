import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BiShoppingBag } from 'react-icons/bi'

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="container">
        <span className="logo">WebStore</span>
        <div className="navlinks">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="product" to="/product">
          Product
          </NavLink>
          <NavLink className="cartCount" to="/cart">
            <BiShoppingBag className="icon" />
            <span>{items.length}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;