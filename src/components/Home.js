import React, { useState} from "react";
import JournalList from "./JournalList";
import UserForm from "./UserForm";
import useUser from "../hooks/useUser";
import DreamForm from "./DreamForm";
import { collection, addDoc} from "firebase/firestore";
import { db} from "./../firebase";

function Home(){
    const [isLoggedIn, currentUser] = useUser();
    const [dreamForm, setDreamForm] = useState(false);


    const handleAddingNewDream = async (newDream) => {
        await addDoc(collection(db, "dreams"), newDream);
        setDreamForm(false);
    }

    let displayedContent = null;
    if(dreamForm) {
        displayedContent = <DreamForm uid={currentUser.uid} handleFunction={handleAddingNewDream}/>
    }
    else {
        displayedContent = <JournalList/>
    }

    if(isLoggedIn) {
        return (
            <React.Fragment>
            <div className="Content" id="userBox">
                <h3 id="welcome">Welcome back, {currentUser.email}</h3>
                <button id="dreamButton" onClick={() => setDreamForm(true)}> Log New Dream </button> 
            </div>
            {displayedContent}
            </React.Fragment>
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