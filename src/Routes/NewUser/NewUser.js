import React from 'react';
import { Link } from 'react-router-dom';
import './NewUser.css';
import SignupForm from '../../Components/NewUser/NewUser';

const NewUser = (props) => {

  const handleSuccessfulSignup = user => {
    const { history } = props
    history.push('/login')
  }

  return (
    <div className="signupDisplay">
      <div className="signupHeader">
        <h1>
          Become a Grapher
        </h1>
      </div>
      <section className="signupBody">
        <SignupForm 
          onSuccessfulSignup={handleSuccessfulSignup}
        />
      </section>
    </div>
  );
}

NewUSer.defaultProps = {
  history: {
    push: () => {},
  },
}

export default NewUser;