import React from 'react';
import { Link } from 'react-router-dom';
// import './Pieces.css';

function Pieces(props) {
  return (
    <div className = "PiecePage">
    <div>
      <h1>
        Pieces
      </h1>
    </div>
    <div className="pieceOptions">
      
        <button> 2112</button>
        <button>MSLCRS</button>
        <button>Baired</button>
    </div>
    <div className="newPiece">
      <button> Add a New Graph</button>
    </div>
    </div>
  );
}

export default Pieces;