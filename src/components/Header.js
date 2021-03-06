import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import "./Header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option text-muted" to="/shop">
        SHOP
      </Link>
      <Link className="option text-muted" to="/contact">
        CONTACT
      </Link>
      <Link className="option text-muted" to="/signin">
        SIGNIN
      </Link>
    </div>
  </div>
);

export default Header;
