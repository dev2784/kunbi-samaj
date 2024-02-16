// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
    getAuth,
    updateProfile} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb0QMg7oq2aAb-9vWEyfCIVh5nZEciTtY",
  authDomain: "kunbi-samaj-fe944.firebaseapp.com",
  projectId: "kunbi-samaj-fe944",
  storageBucket: "kunbi-samaj-fe944.appspot.com",
  messagingSenderId: "49805930972",
  appId: "1:49805930972:web:665d7d095ccfa5fcad1f19",
  measurementId: "G-Y48P2JXRN8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const fireDatabase = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);


let auth = getAuth(firebaseApp);
export const createUser = async (name, mobile, password) => {
    const email = `${mobile}@kunbisamaj.com`;
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user.user, {displayName: name});
        return user
    } catch (e) {
        return  false;
    }
}

export const loginUser  = async (mobile, password) => {
    const email = `${mobile}@kunbisamaj.com`;
    try{
        const response = signInWithEmailAndPassword(auth, email, password);
        return response
    }catch(err){
        return false
    }
}

export const logOut = () => {
    localStorage.clear()
    signOut(auth)
}


export default fireDatabase;

