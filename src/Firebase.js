// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjegIRiPcp3mrpPj3eofYQ982xpXPtwlQ",
  authDomain: "amaz-17a43.firebaseapp.com",
  projectId: "amaz-17a43",
  storageBucket: "amaz-17a43.appspot.com",
  messagingSenderId: "902955713297",
  appId: "1:902955713297:web:954511a9b753a99f9202b0",
  measurementId: "G-9XDSSTM4PS",
});

const auth = firebaseApp.auth();

export { auth };
