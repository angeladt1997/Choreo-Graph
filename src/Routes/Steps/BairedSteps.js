import React, { useEffect, useState } from 'react';
import Pieces from '../Pieces/Pieces';
import PieceApiService from '../../Services/piece-api-service';
import { Link } from 'react-router-dom';

const BairedSteps = (props) => {
  const [targetPiece, setTargetPiece] = useState(undefined)

  const { id } = props.match.params

  useEffect(() => {
    PieceApiService.getTargetPiece(id)
      .then(targetPiece => {
        setTargetPiece(targetPiece)
      })
  },[id])

  const changeStep = (PieceId, StepTitle, StepContent) => {
    PieceApiService.changeStep(PieceId, StepTitle, StepContent)
    .then(newStep => {
      targetPiece(newStep)
  })}



  return (
    <div>
      <h1>
        Baired Steps 
      </h1>
      {targetPiece ? 
      <Pieces
        targetPiece={targetPiece} 
        pieceId={id} 
        changeStep={changeStep}
      /> : 
      <div>Dancers solo onto stage from opposite downstage wings, <br></br>
       one mover at a time with a 30 second space of time between entrances</div>}
      <Link to='/DashboardPage' >
          <button>Back to Dashboard</button>
        </Link>

    </div>
  );
}

export default BairedSteps;