import React, { useState } from "react";
import { VscGrabber, VscChromeClose } from "react-icons/vsc";

import { BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import AccountVector from "../../assets/account-vector.svg";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const showNav = () => {
    setShowSidebar(true);
  };
  return (
    <div className={styles.navbar_container}>
      <header>
        <nav>
          <a href="/">
            <div className={styles.brand}>
              <img src={logo} alt="EcoVanguard Logo" className={styles.logo} />
            </div>
          </a>

          <div className={styles.links}>
            <LinkList />
          </div>
          <div className={styles.icon} onClick={showNav}>
            <VscGrabber />
          </div>
        </nav>
      </header>
      {showSidebar ? <SideNav setShowSidebar={setShowSidebar} /> : null}
    </div>
  );
};

export default Navbar;

const SideNav = ({ setShowSidebar }) => {
  return (
    <>
      <div className={styles.sidenav_modal}>
        <div className={styles.sidenav_container}>
          <span
            className={styles.sidenav_btn}
            onClick={() => setShowSidebar(false)}
          >
            <VscChromeClose className={styles.close_icon} />
          </span>
          <LinkList onClick={() => setShowSidebar(false)} />
        </div>
      </div>
    </>
  );
};
const LinkList = ({ onClick = null }) => {
  let activeStyle = {
    textDecoration: "underline #4AAA42",
  };
  return (
    <ul onClick={onClick} className={styles.lists}>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Contact us
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          About us
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Projects
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/donate"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Donate
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Blog
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/signup"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li className={styles.login}>
          <img src={AccountVector} alt="account" width={27} height={27} />
          Account
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
    </ul>
  );
};
