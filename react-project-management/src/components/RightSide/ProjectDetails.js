import React from "react";

export const ProjectDetails = ({title, description, dueDate}) => {
  return (
    <div className="block">
      <div className="flex mb-6">
        <h1 className="grow text-3xl capitalize">{title}</h1>
        <button className="flex-none px-4 py-2 rounded  bg-red-400 text-white hover:bg-red-600 transition duration-150 ease-linear">
          Delete
        </button>
      </div>
      <p className="text-slate-400 font-extralight text-sm mb-6">{dueDate}</p>
      <p className="mb-6">{description}</p>
      <hr className="border-slate-400 mb-6"></hr>
      <h2 className="mb-6 text-2xl">Tasks</h2>
      <div className="flex gap-3 mb-6 text-small">
        <input type="text " className="bg-slate-400"></input>
        <button className="px-4 py-2 rounded  bg-green-400  hover:bg-green-200 transition duration-150 ease-linear ">Add Task</button>
      </div>
      <p>No projects yet</p>
    </div>
  );
};
