import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage = (props) => {
  //home page. public usage, just gives an overview of the app and allows 
  //users to choose a login option
  return (
    <div className="landingDisplay">
      <div className="landingHeader">
        <h1>
          For Choreographers, By Choreographers
        </h1>
      </div>
       
      <section className="landingBody">
        {
          //as of now, I know this password looks ridiculous, but it was formed
          //using a hash. I have not figured out how to get it to let me make
          //more human looking passwords.
        }
        <p className="introText"> <b>
        Choreo-Graph is an interactive web app made for choreographers and other performing artists as 
    a tool to stage pieces for the purposes of teaching, ease of production communication,
    and at-home studying. In order to get started, click on login. You can use this username and password 
    to access the website!</b></p> 
  
    <p className="loginFromLanding">
    <b/>
    Username: dunder 
    Password: password
        </p>
        <div className="linksToLogin">
        <Link to='/NewUser' >
          <button className="landingButtons"><b>Create Account</b></button>
        </Link>
        <br></br>
        <br></br>
        <Link to='/Login' >
          <button className="landingButtons"><b>Login to Existing Account</b></button>
        </Link>
        </div>
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