import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
       
  
        <NavLink
          to="/chaininfo"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>chaininfo</li>
        </NavLink>
       
        <NavLink
          to="/fakeBayc"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Fake BAYC MINT</li>
        </NavLink>
        <NavLink
          to="/FakeBaycTokenInfo"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Fake BAYC Token Info</li>
        </NavLink>

        
      </ul>
    </div>
  );
};

export default Navigation;
