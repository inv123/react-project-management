import React from "react";
import { Button } from "../Button";
import { useRef } from "react";
import { Input } from "../Input";

export const AddProject = ({hideAddProject, addProject}) => {
    const title = useRef(null);
    const description = useRef(null);
    const dueDate = useRef(null);

    function handleAddProject(){
        if(dueDate.current.value.length > 0 && description.current.value.length > 0 && dueDate.current.value.length > 0){
            addProject(title.current.value, description.current.value, dueDate.current.value)
        }
    }
    
  return (
    <>
      <div className="block">
        <div className="flex flex-nowrap justify-end w-full mb-8">
            <Button type='secondary' content='Cancel' clickHandler={hideAddProject}/>
            <Button type='primary' content='Save' clickHandler={handleAddProject}/>
        </div>
        <div className="flex-none ">
            <Input label='title' input='input' type='text'  ref={title}/>
            <Input label='description' input='textarea'  ref={description}/>
            <Input label='due date' input='input' type='date'  ref={dueDate}/>
        </div>
      </div>
    </>
  );
};
