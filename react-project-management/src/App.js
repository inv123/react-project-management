import { useState } from 'react';
import { LeftSide } from './components/LeftSide/LeftSide';
import { AddProject } from './components/RightSide/AddProject';
import { ProjectDetails } from './components/RightSide/ProjectDetails';


function App() {
  const [isProjectAdding, setIsProjectAdding] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  function showProjectHandler(){
    setShowProjectDetails(false);
    setIsProjectAdding(true)
  }

  function cancelProjectHandler(){
    setIsProjectAdding(false);
  }

  function addProjectHandler(title, description, dueDate){
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      updatedProjects.push({title, description, dueDate, showDetails: false, tasks: []})
      return updatedProjects
    })
    setIsProjectAdding(false);
  }

  function showProjectDetailsHandler(indexx){
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      updatedProjects.map((project, index) => {
        if(index == indexx){
          project.showDetails = true;
        }else{
          project.showDetails = false;

        }
      })
      return updatedProjects
    })
    setIsProjectAdding(false);
    setShowProjectDetails(true);
  }

  return (
    <>
      <div className="flex">
        <div className="w-2/5 h-screen bg-slate-950 py-16 px-8 text-white">
          
          <LeftSide  showAddProject={showProjectHandler} hideAddProject={cancelProjectHandler} projects={projects} showProjectDetails={showProjectDetailsHandler}/>
        </div>

        <div className="grow h-screen py-16 pl-8 pr-24">
          {isProjectAdding && <AddProject hideAddProject={cancelProjectHandler} addProject={addProjectHandler}/>}
          {showProjectDetails && <ProjectDetails title={projects.filter(x => x.showDetails === true)[0].title} description={projects.filter(x => x.showDetails === true)[0].description} dueDate={projects.filter(x => x.showDetails === true)[0].dueDate}/> }
          
        </div>
      </div>
    </>
  );
}

export default App;
