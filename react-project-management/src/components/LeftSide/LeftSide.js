import React from "react";
import { Button } from "../Button";

export const LeftSide = ({showAddProject, hideAddProject}) => {
  return (
    <>
      <h1 className="text-3xl uppercase mb-8">Project App</h1>
      <Button content="+ Add Project" clickHandler={showAddProject}/>
      <div>
        {/* <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </ul> */}
      </div>
    </>
  );
};
