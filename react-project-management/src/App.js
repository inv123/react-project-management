import {useState} from 'react';
import { LeftSide } from './components/LeftSide/LeftSide';
import { AddProject } from './components/RightSide/AddProject';

function App() {
  const [isProjectAdding, setIsProjectAdding] = useState(false);


  return (
    <>
      <div className="flex ...">
        <div className="w-2/5 h-screen bg-slate-950 py-16 px-8 text-white">
          
          <LeftSide  isProjectAdding={isProjectAdding}/>
        </div>

        <div className="grow h-screen py-16 pl-8 pr-24">
          <AddProject />
        </div>
      </div>
    </>
  );
}

export default App;
