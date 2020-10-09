import React, { useEffect, useState } from 'react';
import Pieces from '../Pieces/Pieces';
import PieceApiService from '../../Services/piece-api-service';
import { Link } from 'react-router-dom';

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
      <h1>
        2112 Steps 
      </h1>
      {targetPiece ? 
      <Pieces
        targetPiece={targetPiece} 
        pieceId={id} 
        
      
      /> : 
      <div>One dance initiates snapping. <br></br>
       All other dancers slowly join in. <br></br> 
       Dancer who starts snaps gives a loud clap to stop it</div>}
       <Link to='/DashboardPage' >
          <button>Back to Dashboard</button>
        </Link>

    </div>
  );
}

export default Steps;