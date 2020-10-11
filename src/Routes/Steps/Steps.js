import React, { useEffect, useState } from 'react';
import StepsPage from './StepsPage';
import PieceApiService from '../../Services/piece-api-service';


const Steps = (props) => {
  const [targetPiece, setTargetPiece] = useState(undefined)

  const { id } = props.match.params

  useEffect(() => {
    PieceApiService.getTargetPiece(id)
      .then(targetPiece => {
        setTargetPiece(targetPiece)
      })
  },[id])



  return (
    <div>
      <h1 className="stepsHeader">
        2112 Steps 
      </h1>
      {targetPiece ? 
      <StepsPage
        targetPiece={targetPiece} 
        pieceId={id} 
        
      
      /> : 
      <div className="firstText">One dancer initiates snapping. <br></br>
       All other dancers slowly join in. <br></br> 
       Dancer who starts snaps gives a loud clap to stop it</div>}
       <div className="piecesteps">One dancer initiates snapping. <br></br>
       All other dancers slowly join in. <br></br> 
       Dancer who starts snaps gives a loud clap to stop it</div>
      

    </div>
  );
}

export default Steps;