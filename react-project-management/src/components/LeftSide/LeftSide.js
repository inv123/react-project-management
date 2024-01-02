import React from "react";
import { Button } from "../Button";

export const LeftSide = ({projects, showAddProject, showProjectDetails}) => {
  return (
    <>
      <h1 className="text-3xl uppercase mb-8">Project App</h1>
      <Button content="+ Add Project" clickHandler={showAddProject}/>
      <div className="mt-8">
        <ul>
          {projects.map((project, index) => (
            
            <li key={index} className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 transition ease-in-out rounded cursor-pointer	" onClick={() => showProjectDetails(index)}>{project.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
