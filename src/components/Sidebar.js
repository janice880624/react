import React from "react";
import {Link} from "react-router-dom";

function Sidebar(){
  return (
    <div className="sidebar">
      <h1> Dashboard </h1>
      <Link to="/"> Dashboard </Link>
      <Link to="/Settings"> Setting </Link>
      <Link to="/Visuallizations"> Visuallizations </Link>
    </div>
  );
}

export default Sidebar;