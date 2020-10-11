import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = (props) => {

return (
  //this section of the app will eventually be able to fetch and post
  //videos to the choreograph database as well as allow users to access
  //studio view. I must first learn how to create an api that uses videos
  //and images as well. Time projection of that portion of the project being 
  //done is minimum 6 months
  <div>
    <div className="dashboardHeader">
       <h1>Your Graphs</h1>
    </div>
    <div className="ViewPieces">
      {
        //as of now, pieces is the only thing available on the dash, as well as 
        //a button to logout. Still in the works on expanding all users are able
        //to do from their dashboards.
      }
    <Link to='/Pieces' >
        <button>View Pieces</button>
    </Link>
    </div>
    <div className="logout">
    <Link to='/logout' >
        <button>Logout</button>
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