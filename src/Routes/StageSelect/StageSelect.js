import React, { useState } from 'react';
import './StageSelect.css';
import StageDisplay from '../../Components/StageDisplay/StageDisplay';
import ShipApiService from '../../Services/Stage-api-service';

const StageSelect= (props) => {
  const [stages, setStage] = useState([])

  const clickNewStage = () => {
    StageApiService.createStage()
      .then(newStage => {
        const newStage = stages.slice();

        newStages.push(newStage)
        setStages(newStages)
        console.log("clickNewStage -> stages", stages)
      })
      .catch(e => console.log(e))

  }
  return (
    <div>
      <h1>
        Stage
      </h1>
      <StageDisplay setStages={setStages} stages={stages}/>
      <button onClick={() => clickNewStage()}>Create New Stage</button>
    </div>
  );
  
}

export default StageSelect;