import { useState } from "react";
import {Link} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase";

function Header() {

    const [signOutSuccess, setSignOutSuccess] = useState(null);
    function SignOut(){
        signOut(auth)
        .then(function() {
            setSignOutSuccess("You have successfully signed out!");
        }).catch(function(error){
            setSignOutSuccess(`There was an error signing out: ${error.message}!`);
        })
    }

    let logDreamDisplay = null;
    let signOutDisplay = null;
    if(auth.currentUser !== null){
        logDreamDisplay = <button className="headerButtons"> 
                    <Link className="headerLinks" to="/enterDream">Log Dream</Link>
                </button>;
                signOutDisplay= <button className="headerButtons headerLinks" onClick={SignOut}>Sign out</button>;
    }
    return (
        <div id="Header">
            <h1 id="Title">Dream Journals</h1>
            <button className="headerButtons">
                {/* Button text will change to sign out if you sign in */}
                <Link className="headerLinks" to="/signUp">Sign Up</Link>
            </button>
            {/* hide button when user is not logged in */}
            
            <button className="headerButtons">
                <Link className="headerLinks" to="/">Home</Link>
            </button> 
                     
        </div>
    )
}

export default Header