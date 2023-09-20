import React, { useState} from "react";
import JournalList from "./JournalList";
import UserForm from "./UserForm";
import useUser from "../hooks/useUser";

function Home(){
    const [isLoggedIn, currentUser] = useUser();

    if(isLoggedIn) {
        return (
            <div className="Content">
                <h3>Welcome back, {currentUser.email}</h3>
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