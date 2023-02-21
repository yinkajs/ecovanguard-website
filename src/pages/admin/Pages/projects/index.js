import React from "react";
import "./index.css";
import ProjectCard from "../../components/recentProject";
import ButtonLink from "./../../../../components/Button/button";
import AdminUpload from "../../components/upload/index";

const AdminProject = () => {
  return (
    <>
      <h1>EcoVanguard's Projects</h1>
      <h2>Recent Projects</h2>
      <section className="admin-project__list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <a href="" className="colored">
        See more...
      </a>
      <br />
      <br />
      <br />
      <br />
      <div className="center">
        <ButtonLink>Upload Projects</ButtonLink>
      </div>
      <AdminUpload />
    </>
  );
};

export default AdminProject;
