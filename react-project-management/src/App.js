import {useState} from 'react';
import { LeftSide } from './components/LeftSide/LeftSide';
import { AddProject } from './components/RightSide/AddProject';


function App() {
  const [isProjectAdding, setIsProjectAdding] = useState(false);
  const [projects, setProjects] = useState([]);

  function showProjectHandler(){
    setIsProjectAdding(true)
  }

  function cancelProjectHandler(){
    setIsProjectAdding(false);
  }

  function addProjectHandler(title, description, dueDate){
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      updatedProjects.push({title, description, dueDate})
      return updatedProjects
    })
    setIsProjectAdding(false)
  }

  return (
    <>
      <div className="flex ...">
        <div className="w-2/5 h-screen bg-slate-950 py-16 px-8 text-white">
          
          <LeftSide  showAddProject={showProjectHandler} hideAddProject={cancelProjectHandler} projects={projects}/>
        </div>

        <div className="grow h-screen py-16 pl-8 pr-24">
          {isProjectAdding && <AddProject hideAddProject={cancelProjectHandler} addProject={addProjectHandler}/>}
          
        </div>
      </div>
    </>
  );
}

export default App;
