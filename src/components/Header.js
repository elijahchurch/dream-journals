import {Link} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase";
import React from "react";
import useUser from "../hooks/useUser";

function Header() {
    const [isLoggedIn] = useUser();

    function SignOut(){
        signOut(auth)
    }

    let logDreamDisplay = null;
    if(isLoggedIn) {
        logDreamDisplay = 
                    <button className="headerButtons headerLinks" onClick={SignOut}>Sign out</button>                
    }
    else {
        logDreamDisplay = 
            <button className="headerButtons">
                <Link className="headerLinks" to="/signUp">Sign Up</Link>
            </button>;
    }
    return (
        <div id="Header">
            <h1 id="Title">Dream Journals</h1>
            {logDreamDisplay}            
            <button className="headerButtons">
                <Link className="headerLinks" to="/">Home</Link>
            </button> 
        </div>
    )
}

export default Header