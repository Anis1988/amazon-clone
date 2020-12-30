// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8rmfiJmw_WAkT8ZGdLBDpK3VoUtASoKQ",
  authDomain: "fir-62c15.firebaseapp.com",
  projectId: "fir-62c15",
  storageBucket: "fir-62c15.appspot.com",
  messagingSenderId: "458303492416",
  appId: "1:458303492416:web:7bf3bdeac8762c2418aaa5",
  measurementId: "G-8GY1VL792M",
});

const auth = firebaseApp.auth();

export { auth };
