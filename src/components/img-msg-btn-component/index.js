import React from "react";
import ButtonLink from "../Button/button";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function ImgMsgBtn({
  msgHeader,
  msgBtn,
  btnLink = "",
  msgBody1,
  msgBody2,
  criteria,
  image,
}) {
  // swap = swap
  //   ? `${styles.section_container_swap}`
  //   : `${styles.section_container}`;
  return (
    <div className={styles.section_wrapper}>
      <div className={styles.header}>
        <h2>{msgHeader}</h2>
      </div>
      <div className={styles.section_container}>
        <div className={styles.section_message}>
          <div className={styles.msgBody}>
            <p>{msgBody1}</p>
            <p>
              {msgBody2} <a href="#">{criteria}</a>
            </p>
          </div>
          <div className={styles.msgBtn}>
            <Link to={btnLink}>
              <ButtonLink>{msgBtn}</ButtonLink>
            </Link>
          </div>
        </div>
        <div className={styles.section_img}>
          <img src={image} alt="Waste Disposal" />
        </div>
      </div>
    </div>
  );
}

export default ImgMsgBtn;
