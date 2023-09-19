import React, { useState} from "react";
import JournalList from "./JournalList";
import UserForm from "./UserForm";

function Home(){
    const [loggedIn, setLoggedIn] = useState(false)

    if(loggedIn) {
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