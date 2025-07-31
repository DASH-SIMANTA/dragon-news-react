import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)



    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        logInUser,
        createUser,
        logOut,

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state changed:', currentUser);
            setUser(currentUser);
        });

        // Cleanup subscription on unmount
        return () => {
            unsubscribe()
        };
    }, []);

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;