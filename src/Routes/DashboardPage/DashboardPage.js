import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const DashboardPage = (props) => {

return (
  <div>
    <div className="header">
       <h1>Your Graphs</h1>
    </div>
    <div className="selectStage">
    <Link to='/StageSelect' >
    <button>Select A Stage</button>
  </Link>
    </div>
  </div>
)
}

DashboardPage.defaultProps = {
    history: {
      push: () => {},
    },
  }
  
  export default DashboardPage;