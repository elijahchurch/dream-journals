import React, { useState, useEffect} from "react";
import JournalList from "./JournalList";
import UserForm from "./UserForm";
import useUser from "../hooks/useUser";
import DreamForm from "./DreamForm";
import { collection, addDoc, onSnapshot, where, query} from "firebase/firestore";
import { db} from "./../firebase";

function Home(){
    const [isLoggedIn, currentUser] = useUser();
    const [dreamForm, setDreamForm] = useState(false);
    const [dreamList, setDreamList] = useState([]);


    useEffect(() => {
        if(currentUser){
        const q = query(collection(db, "dreams"), where("uid", "==", `${currentUser.uid}`));
        const unSubscribe = onSnapshot(
            q, (collectionSnapshot) => {
                const dreams = [];
                collectionSnapshot.forEach((doc) => {
                dreams.push({
                    name: doc.data().name,
                    date: doc.data().date,
                    description: doc.data().description,
                    id: doc.id
                })
            })
            setDreamList(dreams)
        },
        (error) => {
            console.log(error.message)
        }
        );
        return () => unSubscribe();
    }
    }, [currentUser] );


    const handleAddingNewDream = async (newDream) => {
        await addDoc(collection(db, "dreams"), newDream);
        setDreamForm(false);
    }

    let displayedContent = null;
    if(dreamForm) {
        displayedContent = <DreamForm uid={currentUser.uid} handleFunction={handleAddingNewDream}/>
    }
    else {
        displayedContent = <JournalList list={dreamList}/>
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