import React from "react";
import Logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
