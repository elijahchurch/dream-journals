import React, { useState} from "react";
import JournalList from "./JournalList";
import UserForm from "./UserForm";
import {Link} from "react-router-dom";

function Home(){
    const [loggedIn, setLoggedIn] = useState(true)

    if(loggedIn) {
        return (
            <div className="Content">
                <JournalList/>
                <button> 
                    <Link className="EnterDream" to="/enterDream">Log Dream Entry</Link>
                </button>
            </div>
        )
    }
    else{
        return (
            <div className="Content">
                <UserForm 
                    message="Sign In to Your Account"
                    buttonText="Sign In"/>
            </div>
        )
    }
}

export default Home;