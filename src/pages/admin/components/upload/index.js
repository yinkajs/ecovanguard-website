import "./index.css";
import InputComponent from "./../../../../components/Input/input";
import ButtonLink from "./../../../../components/Button/button";

const AdminUpload = () => {
  return (
    <div className="admin-upload__container">
      <section className="admin-upload">
        <h3>Upload Project</h3>
        <p>Select Category</p>
        <div className="admin-upload__input-type">
          <label className="admin-upload__input-type__label">
            Ongoing Project
            <input type="radio" />
          </label>
          <label>
            <span>Executed Project</span>
            <input type="radio" checked />
          </label>
          <label>
            visitation
            <input type="radio" />
          </label>
        </div>
        <div>
          <label>
            Project Title
            <br />
            <InputComponent placeholder="What's the Project's Title" />
          </label>
          <label>
            Beneficiary
            <br />
            <InputComponent placeholder="Project's beneficiary" />
          </label>
          <label>
            Date
            <br />
            <InputComponent placeholder="What's the Project's Title" />
          </label>
        </div>
        <div>
          <label>Upload Images</label>
          <input type="file" />
          <label>
            Project Details
            <textarea placeholder="Type project details"></textarea>
          </label>
        </div>
        <div className="center">
          <ButtonLink>Upload Project</ButtonLink>
        </div>
      </section>
    </div>
  );
};
export default AdminUpload;
