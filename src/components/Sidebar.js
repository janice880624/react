import React from "react";
import {Link} from "react-router-dom";

function Sidebar(){
    return (
        <div>
            <p> There is Sidebar </p>
            <ul>
                <li><Link to="/"> Dashboard </Link></li>
                <li><Link to="/Settings"> Setting </Link></li>
                <li><Link to="/Visuallizations"> Visuallizations </Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
