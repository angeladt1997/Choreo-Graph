import React, { useEffect, useState } from 'react';
import Pieces from '../Pieces/Pieces';
import PieceApiService from '../../Services/piece-api-service';
import { Link } from 'react-router-dom';

const MSLCRSSteps = (props) => {
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
        MSLCRS 
      </h1>
      {targetPiece ? 
      <Pieces
        targetPiece={targetPiece} 
        pieceId={id} 
        changeStep={changeStep}
      /> : 
      <div>Removing Piece. Please wait.</div>}
      <Link to='/DashboardPage' >
          <button>Back to Dashboard</button>
        </Link>

    </div>
  );
}

export default MSLCRSSteps;