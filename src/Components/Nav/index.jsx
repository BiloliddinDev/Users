import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="text-center bg-slate-800 text-white">
      <h1>LOGO</h1>
      <div>
        <NavLink to="/register">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Nav;
