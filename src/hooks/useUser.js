import { useState, useEffect} from "react";
import { auth } from "./../firebase";

function useUser() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(() => {
        if(auth.currentUser !== null) {
            setIsLoggedIn(true);
            setCurrentUser(auth.currentUser);
        }
        else{
            setIsLoggedIn(false);
            setCurrentUser(null);
        }
        })
    }, []);
    return [isLoggedIn, currentUser]
}

export default useUser;