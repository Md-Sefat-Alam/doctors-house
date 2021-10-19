import FirebaseInit from '../components/Firebase/FirebaseInit';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react'

FirebaseInit();

const useFirebase = () => {
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [emailPassword, setEmailPassword] = useState({})
    const auth = getAuth();

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUserData(result.user);
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {

            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUserData({});
            })
    }

    const emailPasswordLogin = () => {
        const { email, password } = emailPassword;
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserData(result.user);
            })
            .catch(error => {
                setError(error.code)
            })
            .finally(() => {

            })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUserData(user);
            }
            else {
                setUserData({});
            }
        })
        return () => unsubscribed;
    }, []);

    return {
        googleSignIn,
        userData,
        error,
        logOut,
        setEmailPassword,
        emailPasswordLogin
    }
};

export default useFirebase;