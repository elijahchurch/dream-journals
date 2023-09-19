import React, { useState} from "react";
import JournalList from "./JournalList";
import SignIn from "./SignIn";

function Home(){
    const [loggedIn, setLoggedIn] = useState(false)

    if(loggedIn) {
        return (
            <JournalList/>
        )
    }
    else{
        return (
            <SignIn/>
        )
    }
}

export default Home;