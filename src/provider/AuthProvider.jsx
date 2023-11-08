import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireabase/firebase.config";

export const AuthContext = createContext();
 

const AuthProvider = ({children}) => {
    
    
    const [userr, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();


    //creating user

    const createUser = (email, password, name, url)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            
            updateProfile(result.user,{
                displayName:name,
                photoURL:url
            })
        })
    }


    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
    },[]);

    const auth = getAuth();
    const signInG = () =>{
       return signInWithPopup(auth, provider);
    }



const authInfo={

    createUser,
    signIn,
    userr,
    setUser,
    logout,
    loading,
    signInG

}
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;