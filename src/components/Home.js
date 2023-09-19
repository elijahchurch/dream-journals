import React, { useState} from "react";
import JournalList from "./JournalList";
import UserForm from "./UserForm";
import {Link} from "react-router-dom";
import { db, auth } from "./../firebase"

function Home(){
    const [loggedIn, setLoggedIn] = useState(false)

    if(auth.currentUser !== null) {
        return (
            <div className="Content">
                <JournalList/>
                
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