import FirebaseInit from '../Firebase/FirebaseInit';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { useState, useEffect } from 'react'

FirebaseInit();

const useFirebase = () => {
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        const githubProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUserData({});
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
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
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);

    return {
        googleSignIn,
        userData,
        setUserData,
        error,
        setError,
        logOut,
        isLoading,
        setIsLoading,
        githubLogin
    }
};

export default useFirebase;