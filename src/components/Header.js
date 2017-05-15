import React from "react";
import '../styles/Header.css';
import Bag from "./Bag";

const Header = () => (
  <div className="header">
    <div className="header-title">
      Fancy Store
    </div>
    <Bag/>
  </div>
);

export default Header;
