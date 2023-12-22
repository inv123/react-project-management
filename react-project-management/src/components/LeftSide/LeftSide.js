import React from "react";
import { Button } from "../Button";

export const LeftSide = ({projects, showAddProject, hideAddProject}) => {
  return (
    <>
      <h1 className="text-3xl uppercase mb-8">Project App</h1>
      <Button content="+ Add Project" clickHandler={showAddProject}/>
      <div>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
