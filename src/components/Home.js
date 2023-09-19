import React, { useState} from "react";
import JournalList from "./JournalList";
import SignIn from "./SignIn";

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
                <SignIn/>
            </div>
        )
    }
}

export default Home;