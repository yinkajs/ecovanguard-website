import React from "react";
import "./recentUpload.css";
import ButtonLink from "../../../../components/Button/button";

const RecentUpload = () => {
  return (
    <div className="upload">
      <div className="upload__image"></div>
      <div>
        <h4>World Water day</h4>
        <div className="upload__container">
          <p>
            <small>Blog post</small>
          </p>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
        {/* </div> */}
      </div>
      <div>
        <span className="upload__info">
          The EcoVanguard club attended the Engineer Bola Jagun&apos;s annual
          lecture at the NSE headquarters, Ibadan.{" "}
        </span>
      </div>
      <div className="upload__btn-container">
        <ButtonLink>Edit</ButtonLink>
        <ButtonLink className="upload__btn no-hover">Details</ButtonLink>
      </div>
    </div>
  );
};
export default RecentUpload;
