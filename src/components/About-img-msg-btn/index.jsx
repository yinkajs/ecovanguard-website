import React from "react";
import ButtonLink from "../Button/button";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function ImgMsgBtn({
  header,
  msgBtn,
  msgBody1,
  msgBody2,
  btnLink = "",
  criteria,
  image,
  swap,
}) {
  swap = swap
    ? `${styles.section_container_swap}`
    : `${styles.section_container}`;
  return (
    <div className={styles.section_wrapper}>
      <h2 className={styles.header}>{header}</h2>
      <div className={swap}>
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
          <img src={image} alt="Waste Disposal"></img>
        </div>
      </div>
    </div>
  );
}

export default ImgMsgBtn;
