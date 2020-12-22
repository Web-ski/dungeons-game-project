import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/game">Game</NavLink>
      <NavLink to="/about">About</NavLink>
    </section>
  );
};

export default Header;
