import React, { useEffect, useState } from 'react';
import StepsPage from './StepsPage';
import PieceApiService from '../../Services/piece-api-service';


const BairedSteps = (props) => {
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
        Baired Steps 
      </h1>
      {targetPiece ? 
      <StepsPage
        targetPiece={targetPiece} 
        pieceId={id} 
       
      /> : 
      <div className="firstText">Dancers solo onto stage from opposite downstage wings, <br></br>
       one mover at a time with a 30 second space of time between entrances</div>}
       <div className="piecesteps">Dancers solo onto stage from opposite downstage wings, <br></br>
       one mover at a time with a 30 second space of time between entrances</div>

    </div>
  );
}

export default BairedSteps;