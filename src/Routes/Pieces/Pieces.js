import React from 'react';
import { Link } from 'react-router-dom';

//this page simply allows users to click on whatever piece they would like to
//see the steps to.
function Pieces(props) {
  return (
    <div className = "PiecePage">
    <div>
      <h1 className="piecesHeader">
        Pieces
      </h1>
    </div>
    <div className="pieceOptions">
      <Link to='/2112'>
        <button className="pieceOptions"> 2112</button>
      </Link>
      <br></br>
      <br></br>
      <Link to='/MSLCRS'>
        <button className="pieceOptions">MSLCRS</button>
      </Link>
      <br></br>
      <br></br>
      <Link to='/Baired'>
          <button className="pieceOptions">Baired</button>
      </Link>
    </div>
    
    </div>
  );
}

export default Pieces;