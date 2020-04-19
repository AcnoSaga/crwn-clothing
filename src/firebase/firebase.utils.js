import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyApeoYHjBJp6u3MVUsZwkcoQHAwZjp6OWg",
	authDomain: "crwn-db-9b8bd.firebaseapp.com",
	databaseURL: "https://crwn-db-9b8bd.firebaseio.com",
	projectId: "crwn-db-9b8bd",
	storageBucket: "crwn-db-9b8bd.appspot.com",
	messagingSenderId: "590671445650",
	appId: "1:590671445650:web:d15c30fee69252fe3d704b",
	measurementId: "G-1V52ETJDNV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
