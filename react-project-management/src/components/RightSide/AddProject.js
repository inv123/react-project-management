import React from "react";
import { Button } from "../Button";

export const AddProject = ({hideAddProject}) => {
  return (
    <>
      <div className="block">
        <div className="flex flex-nowrap justify-end w-full mb-8">
            <Button type='secondary' content='Cancel' clickHandler={hideAddProject}/>
            <Button type='primary' content='Save'/>
        </div>
        <div class="flex-none ">
            <label className="block mb-2 uppercase">title</label>
            <input className="block bg-gray-100 h-10 border-b-2 border-gray-300 border-solid w-full focus:border-gray-500 px-4 focus-visible:outline-none mb-8 py-2"/>

            <label className="block mb-2 uppercase">description</label>
            <textarea className="block bg-gray-100 h-24 border-b-2 border-gray-300 border-solid w-full focus:border-gray-500 pl-4 focus-visible:outline-none mb-8 py-2" />

            <label className="block mb-2 uppercase">due date</label>
            <input className="block bg-gray-100 h-10 border-b-2 border-gray-300 border-solid w-full focus:border-gray-500 px-4 focus-visible:outline-none mb-8 py-2" type="date"/>
        </div>
      </div>
    </>
  );
};
