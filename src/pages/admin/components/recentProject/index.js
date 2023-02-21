import "./index.css";
import { ReactComponent as DeleteICon } from "../../../../assets/admin-delete-icon.svg";
import { ReactComponent as EditIcon } from "../../../../assets/edit.svg";
import { ReactComponent as NotesIcon } from "../../../../assets/notes-icon.svg";
import placeholderImage from "../../../../assets/waste-bin.jpg";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src={placeholderImage} alt="whatever" width={400} height={270} />
      <div className="project-card__details">
        <h3>Ongoing Project</h3>
        <p>Supply of 200 waste bins to UI</p>
        <small className="project-card__date">
          {new Date().toDateString()}
        </small>
        <br />
        <small>Dev: I don't know if it's true, haha</small>
        <br />
        <IconList />
      </div>
    </div>
  );
};
const IconList = () => {
  return (
    <div className="project-card__icons disable-margin-block">
      <EditIcon style={{ width: "30px" }} />
      <NotesIcon style={{ width: "30px" }} />
      <DeleteICon style={{ width: "30px" }} />
    </div>
  );
};
export default ProjectCard;
