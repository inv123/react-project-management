import React from "react";
import { Button } from "../Button";

export const AddProject = () => {
  return (
    <>
      <div class="flex justify-end mb-8">
        <div class="flex flex-nowrap ">
            <Button type='secondary' content='Cancel'/>
            <Button type='primary' content='Save'/>
        </div>
        <div class="flex-none ..."></div>
      </div>
    </>
  );
};
