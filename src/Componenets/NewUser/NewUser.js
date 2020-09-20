
import React, { useState } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './NewUser.css';

const NewUser = (props) => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password, email, state, studio } = e.target
    
    }

    AuthApiService.postUser({
        username: username.value,
        password: password.value,
        email: email.value,
        state: state.value,
        studio: studio.value
    })
    .then(user => {
        username.value = ""
        password.value = ""
        email.value = ""
        state.value = "Texas"
        studio.value = "STUDIO6"
        props.onSuccessfulSignup
    })
    .catch(res => {
        setError(res.error);
    })
}

return (
    <div className="RegistrationForm">
        <form onSubmit={(e) => handleSubmit(e)} className="RegistrationFormContent">
            <textarea className="newUsername" placeholder="username">Choose a Username</textarea> 
            <textarea className="newPassword" placeholder="password">Choose a Password</textarea>
            <textarea className="emailAddress" placeholder="email Address">Enter Your Email</textarea>
        </form>
    <div class="selectors">
            <select name="state" className="stateSelector"> State</select>
                <option value="Texas">Texas</option>
            <select name="organizationAffiliation" className="organizationSelector"> Organization</select>
                <option value="studio6">STUDIO6</option>
    </div>
    </div>

)



NewUser.defaultProps = {
onSuccessfulSignup: () => {}
}

export default NewUser;