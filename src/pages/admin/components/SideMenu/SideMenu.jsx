import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  FaImages,
  FaBlogger,
  FaUserFriends,
  FaDatabase,
  FaHome,
  FaChartBar,
  FaCalendarAlt,
  FaUsers,
  FaSearchLocation,
} from "react-icons/fa";
import { VscGrabber } from "react-icons/vsc";
import { BsXLg } from "react-icons/bs";

import avatar from "../../../../assets/boy.png";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div>
      {showSideBar ? <SideBar setShowSideBar={setShowSideBar} /> : null}

      <VscGrabber
        className={styles.bar_icon}
        onClick={() => setShowSideBar(true)}
      />

      <div className={styles.sideMenu_container}>
        <div className={styles.user}>
          <div className={styles.user_avatar}>
            <img src={avatar} alt="user avatar" />
          </div>
          <span>Salami</span>
        </div>

        <ul>
          <li>
            <FaHome />
            <span>Home</span>
          </li>

          <li>
            <FaDatabase />
            <span>Data</span>
          </li>

          <li>
            <FaChartBar />
            <span>Projects</span>
          </li>

          <Link to="/">
            <li>
              <FaBlogger />
              <span>Blog</span>
            </li>
          </Link>

          <Link to="/gallery">
            <li>
              <FaImages />
              <span>Gallery</span>
            </li>
          </Link>

          <li>
            <FaUserFriends />
            <span>Executives</span>
          </li>

          <li>
            <FaCalendarAlt />
            <span>Events</span>
          </li>

          <li>
            <FaUsers />
            <span>Partners</span>
          </li>

          <li>
            <FaSearchLocation />
            <span>Location</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

export const SideBar = ({ setShowSideBar }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.sidebar_container}>
          <button
            className={styles.close_button}
            onClick={() => setShowSideBar(false)}
          >
            <BsXLg />
          </button>
          <div className={styles.testing}>
            <div className={styles.user}>
              <div className={styles.user_avatar}>
                <img src={avatar} alt="user avatar" />
              </div>

              <span>Salami</span>
            </div>

            <ul onClick={() => setShowSideBar(false)}>
              <li>
                <FaHome />
                <span>Home</span>
              </li>

              <li>
                <FaDatabase />
                <span>Data</span>
              </li>

              <li>
                <FaChartBar />
                <span>Projects</span>
              </li>

              <Link to="/">
                <li>
                  <FaBlogger />
                  <span>Blog</span>
                </li>
              </Link>

              <Link to="/gallery">
                <li>
                  <FaImages />
                  <span>Gallery</span>
                </li>
              </Link>

              <li>
                <FaUserFriends />
                <span>Executives</span>
              </li>

              <li>
                <FaCalendarAlt />
                <span>Events</span>
              </li>

              <li>
                <FaUsers />
                <span>Partners</span>
              </li>

              <li>
                <FaSearchLocation />
                <span>Location</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
