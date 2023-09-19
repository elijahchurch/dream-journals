import React, { useState} from "react";
import PropTypes from "prop-types";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function UserForm(props){
    const [registerSuccess, setregisterSuccess] = useState(null);
    const [signInSuccess, setSignInSuccess] = useState(null);

    function RegisterAccount(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setregisterSuccess(`You have successfully registered an account under this email: ${userCredential.user.email}`)
            })
            .catch((error) => {
                setregisterSuccess(`There was an error registering your account: ${error.message}`)
            });
    }
    
    function SignIn(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
        })
        .catch((error) => {
            setSignInSuccess(`There was an error signing in: ${error.message}!`)
        });
    }

    

    let handleFormFunction = null;
    if(props.buttonText === "Sign Up") {
        handleFormFunction = RegisterAccount;
    }
    else if(props.buttonText === "Sign In") {
        handleFormFunction = SignIn;
    }

    return(
        <div className="formTemplate">
            <h2>{props.message}</h2>
            <form onSubmit={handleFormFunction}>
                <label htmlFor="email">Email:</label>
                <input 
                    className="formInput"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="email" />
                <br/>
                <label htmlFor="password">Password:</label>
                <input
                    className="formInput"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"/>
                <br/>
                <button type="submit">{props.buttonText}</button>
            </form>
            {registerSuccess}
            {signInSuccess}
        </div>


    )
}

UserForm.propTypes = {
    message: PropTypes.string,
    buttonText: PropTypes.string
}

export default UserForm;