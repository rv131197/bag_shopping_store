import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
        apiKey: "AIzaSyAh90TrFVbga0BMhl-lJ89YTLQIMBJhUd4",
        authDomain: "shopping-db-54a25.firebaseapp.com",
        projectId: "shopping-db-54a25",
        storageBucket: "shopping-db-54a25.appspot.com",
        messagingSenderId: "778852378630",
        appId: "1:778852378630:web:d251580d7f77f9c3d37b87",
        measurementId: "G-17097GC753"
}  // this is the config object from firebase

firebase.initializeApp(config); // initializing our app with the above config

export const auth = firebase.auth(); // accessing auth() method on firebase, anything related to authentication
export const firestore = firebase.firestore();


// setting up google authentication utlility
const provider = new firebase.auth.GoogleAuthProvider() // gives access to googleAuthProvider class from auth library
provider.setCustomParameters({ prompt: 'select_account'}) //trigger google pop up whenever we use this for sign in

export const signInWithGoogle = () => auth.signInWithPopup(provider) // takes the provider class we made. but it takes from many types of popups like twitter etc.

export default firebase; // exporting it incase we want the whole library