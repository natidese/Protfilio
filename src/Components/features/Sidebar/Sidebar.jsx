import React, { useState } from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";
import Button from "../Button/Button";


export default function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Hire Me</Link></li>
        <Button  />
      </ul>
    </nav>
  )
}
