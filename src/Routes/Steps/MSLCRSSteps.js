import React, { useEffect, useState } from 'react';
import StepsPage from './StepsPage';
import PieceApiService from '../../Services/piece-api-service';

const MSLCRSSteps = (props) => {
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
        MSLCRS 
      </h1>
      {targetPiece ? 
      <StepsPage
        targetPiece={targetPiece} 
        pieceId={id} 
        
      /> : 
      <div className="firstText">Dancer (soloist) starts downstage in the chair facing upstage <br></br>
      with a large mirror covering the back sham.</div>}
      <div className="piecesteps">Dancer (soloist) starts downstage in the chair facing upstage <br></br>
      with a large mirror covering the back sham.</div>

    </div>
  );
}

export default MSLCRSSteps;