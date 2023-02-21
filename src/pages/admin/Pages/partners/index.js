import React from "react";
import InputComponent from "../../../../components/Input/input";
import "./index.css";
import ButtonLink from "./../../../../components/Button/button";

const AdminPartner = () => {
  return (
    <div className="admin-partner">
      <h1>Partners</h1>
      <section>
        <h2>All Partners</h2>
      </section>
      <section>
        <h2>Add Partner</h2>
        <div className="admin-partner__input">
          <div>
            <label>Name</label>
            <br />
            <InputComponent type="text" placeholder="Partner's name" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <InputComponent
              type="select"
              placeholder="Select
            category"
              className="full-width"
            />
          </div>
          <div>
            <h3>Upload Images</h3>
            <label>
              Select all project features in order
              <input type="file" />
            </label>
          </div>
          <div>
            <label className="check">
              Is this partner a major partner? &nbsp; &nbsp;&nbsp;{" "}
              <input type="checkbox" />
            </label>
            <br />
            <ButtonLink>Add Partners</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPartner;
