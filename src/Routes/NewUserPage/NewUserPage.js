import React from 'react';
import './NewUserPage.css';
import NewUserForm from '../../Components/NewUserForm/NewUserForm';

//this page just adds the functionality to the NewUserForm and 
//gives it its place in the app
const NewUser = (props) => {

  const handleSignupSuccess = user => {
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
          onSignupSuccess={handleSignupSuccess}
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