import React from "react";
import { Button } from "../Button";
import { useRef } from "react";
import { Input } from "../Input";

export const AddProject = ({hideAddProject, addProject}) => {
    const title = useRef(null);
    const description = useRef(null);
    const dueDate = useRef(null);

    
  return (
    <>
      <div className="block">
        <div className="flex flex-nowrap justify-end w-full mb-8">
            <Button type='secondary' content='Cancel' clickHandler={hideAddProject}/>
            <Button type='primary' content='Save' clickHandler={() => addProject(title.current.value, description.current.value, dueDate.current.value)}/>
        </div>
        <div class="flex-none ">
            <Input label='title' input='input' type='text'  ref={title}/>
            <Input label='description' input='textarea'  ref={description}/>
            <Input label='due date' input='input' type='date'  ref={dueDate}/>
        </div>
      </div>
    </>
  );
};
