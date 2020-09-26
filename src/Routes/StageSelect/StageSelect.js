import React, { useState } from 'react';
import './StageSelect.css';
import StageDisplay from '../../Components/StageDisplay/StageDisplay';
import PieceApiService from '../../Services/piece-api-service';

const StageSelect= (props) => {
  const [stages, setStage] = useState([])

  const clickNewStage = () => {
    PieceApiService.createStage()
      .then(newStage => {
        const newStages = newStage.slice();

        newStages.push(newStage)
        setStage(newStage)
        console.log("clickNewStage -> stages", stages)
      })
      .catch(e => console.log(e))

  }
  return (
    <div>
      <h1>
        Stage
      </h1>
      <StageDisplay setStage={setStage} stages={stages}/>
      <button onClick={() => clickNewStage()}>Create New Stage</button>
    </div>
  );
  
}

export default StageSelect;