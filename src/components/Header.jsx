import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <div className="topbar">
        <a className="topLinks" href="#main-content">
          Skip to main content
        </a>
        <a className="topLinks" href="#">
          Sign In
        </a>
        <a
          href="#"
          className="topLinks"
          id="switch-lang"
          title="Change Language हिन्दी"
          aria-label="Change Language हिन्दी"
          rel="हिन्दी"
        >
          हिन्दी
        </a>
      </div>
      <div className="header">
        <div className="header-right">
          <img
            id="Mainlogo"
            src="https://ati.dae.gov.in/DAE%20Atdministrative%20Training%20Institute_files/image001.jpg"
            alt="ISTM Logo"
            height="106"
          />
        </div>
        <div className="header-left">
          <img
            id="logo1"
            src="https://www.istm.gov.in/userfiles/emblem-dark.png"
            alt="State Emblem of India"
            height="100"
          />
          <img
            src="https://www.istm.gov.in/files/images/gandhi.png"
            alt="Azadi Ka Amrit Mahotsav"
            height="65"
          />
          <img
            src="https://www.istm.gov.in/files/images/g20.png"
            alt="INDIA G20"
            height="70"
            width="100"
          />
        </div>
      </div>
     
     <div className="navitems">
      <div className="nav-menu">
        <NavLink to="/home">Home</NavLink>
        <div className="subnav">
          <button className="subnavbtn">About Us</button>
          <div className="subnav-content">
            <NavLink to="/company">Introduction</NavLink>
            <NavLink to="/team">Vision</NavLink>
            <NavLink to="/careers">Mission</NavLink>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Trainings</button>
          <div className="subnav-content">
            <NavLink to="/company">Introduction</NavLink>
            <NavLink to="/team">Vision</NavLink>
            <NavLink to="/careers">Mission</NavLink>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Faculty</button>
          <div className="subnav-content">
            <NavLink to="/company">Introduction</NavLink>
            <NavLink to="/team">Vision</NavLink>
            <NavLink to="/careers">Mission</NavLink>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Related Links</button>
          <div className="subnav-content">
            <NavLink to="/company">Introduction</NavLink>
            <NavLink to="/team">Vision</NavLink>
            <NavLink to="/careers">Mission</NavLink>
          </div>
        </div>
        <NavLink to="/company">Contact Us</NavLink>
      </div>
      </div>
    </>
  );
};

export default Header;
