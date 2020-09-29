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
      <Link to='/2112'>
        <button> 2112</button>
      </Link>
      <Link to='/MSLCRS'>
        <button>MSLCRS</button>
      </Link>
      <Link to='/Baired'>
          <button>Baired</button>
      </Link>
    </div>
    <div className="newPiece">
      <button> Add a New Graph</button>
    </div>
    </div>
  );
}

export default Pieces;