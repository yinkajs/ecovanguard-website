import InputComponent from "../../../../components/Input/input";
import RecentUpload from "../../components/recentUpload/recentUpload";
import ButtonLink from "../../../../components/Button/button.js";
import RecentDataList from "../../components/recentData/recentData";
import bgImage from "../../../../assets/vector-upload.svg";

const AdminHome = () => {
  return (
    <>
      <h1>Welcome, Admin</h1>
      <small>President EcoVanguard club</small>
      <br />
      <br />
      <div className="center">
        <InputComponent
          placeholder="Search for info"
          bgImage="akar-icons_search.svg"
          className="admin__input-element"
        />
      </div>
      <section className="admin__upload">
        <h2>Recent Info Upload</h2>
        <div className="admin__upload-container">
          <RecentUpload />
          <RecentUpload />
        </div>
      </section>
      <RecentDataList />
      <div className="center">
        <ButtonLink className="admin__upload__btn">
          Upload info <img src={bgImage} alt="vector" height={20} width={20} />
        </ButtonLink>
      </div>
    </>
  );
};
export default AdminHome;
