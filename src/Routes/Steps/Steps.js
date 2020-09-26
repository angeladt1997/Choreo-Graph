import React, { useEffect, useState } from 'react';
// import './Steps.css';
import Pieces from '../../Components/Pieces/Pieces';
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

  const changeStep = (PieceId, StepTitle, StepContent) => {
    PieceApiService.changeStep(PieceId, StepTitle, StepContent)
    .then(newStep => {
      targetPiece(newStep)
  })}

  // const deleteStep = (pieceId) => {
  //   PieceApiService.deleteStep(pieceId)
  //   const { history } = props
  //   history.push('/Piece')
  // }

  return (
    <div>
      <h1>
        Piece Steps 
      </h1>
      {targetPiece ? 
      <Pieces
        targetPiece={targetPiece} 
        pieceId={id} 
        changeStep={changeStep}
       // deletePiece={deletePiece}
      /> : 
      <div>Removing Piece. Please wait.</div>}

    </div>
  );
}

export default Steps;