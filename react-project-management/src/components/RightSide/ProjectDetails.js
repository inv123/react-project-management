import React from "react";
import { Input } from "../Input";
import { useRef } from "react";
import { Button } from "../Button";

export const ProjectDetails = ({title, description, dueDate, tasks, deleteProject, addTask, deleteTask}) => {
    const taskRef = useRef(null);

  return (
    <div className="block">
      <div className="flex mb-6">
        <h1 className="grow text-3xl capitalize">{title}</h1>
        <Button type={'red'} content={'Delete'} clickHandler={deleteProject}/>
      </div>
      <p className="text-slate-400 font-extralight text-sm mb-6">{dueDate}</p>
      <p className="mb-6">{description}</p>
      <hr className="border-slate-400 mb-6"></hr>
      <h2 className="mb-6 text-2xl">Tasks</h2>
      <div className="flex gap-3 mb-6 text-small">
        <Input taskInput={true} input='input' type='text' ref={taskRef}/>
        <Button type={"green"} content={'Add Task'} clickHandler={() => addTask(taskRef.current.value)}/>
      </div>
      {tasks.length === 0 && <p>No projects yet.</p> }
        <ul>
        {tasks.map((task, index) => (
        <li key={index}>
            <div className="bg-slate-200 block mb-8" >
            <div className="flex" >
                <p className="grow my-auto pl-6">{task.taskname}</p>
                <Button type={'red'} content={'Clear'} clickHandler={() => deleteTask(index)}/>
            </div>
        </div>
        </li>
      ))}
        </ul>
      
      
    </div>
  );
};
