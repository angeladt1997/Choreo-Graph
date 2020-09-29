import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
//import ChoreoGraphLogo from '../ChoreographImages/ChoreoGraphLogo.png';

const LandingPage = (props) => {
  return (
    <div className="landingDisplay">
      <div className="landingHeader">
        <h1>
          For Choreographers, By Choreographers
        </h1>
      </div>
       
      <section className="landingBody">
        <p className="introText">
        Choreo-Graph is an interactive web app made for choreographers and other performing artists as 
    a tool to stage pieces for the purposes of teaching, ease of production communication,
    and at-home studying. In order to get started, click on login. You can use this username and password 
    to access the website! 
    Username: dunder 
    Password $2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne
        </p>
        <Link to='/NewUser' >
          <button>Create Account</button>
        </Link>
        <Link to='/Login' >
          <button>Login to Existing Account</button>
        </Link>
      </section>
    </div>
  );
}


LandingPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default LandingPage;