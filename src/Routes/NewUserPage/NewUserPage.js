import React from 'react';
//import { Link } from 'react-router-dom';
import './NewUserPage.css';
import NewUserForm from '../../Components/NewUserForm/NewUserForm';

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
        <NewUserForm 
          onSuccessfulSignup={handleSuccessfulSignup}
        />
      </section>
    </div>
  );
}

NewUser.defaultProps = {
  history: {
    push: () => {},
  },
}

export default NewUser;