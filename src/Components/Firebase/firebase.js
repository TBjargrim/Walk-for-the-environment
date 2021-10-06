import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChL12rqpgqhXPD2rnD5p5m8Mmrm7ARlsc",
    authDomain: "ga-for-miljon.firebaseapp.com",
    databaseURL: "https://ga-for-miljon-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ga-for-miljon",
    storageBucket: "ga-for-miljon.appspot.com",
    messagingSenderId: "753821472990",
    appId: "1:753821472990:web:906f690df71d766af10a4f"
  };


  class Firebase {
      constructor() {
        firebase.initializeApp(firebaseConfig)

        this.auth = firebase.auth();
      }
      doCreateUserWithEmailAndPassword = (email, password) =>
this.auth.createUserWithEmailAndPassword(email, password);

doSignInWithEmailAndPassword = (email, password) =>
this.auth.signInWithEmailAndPassword(email, password);

doSignOut = () => this.auth.signOut();

doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
doPasswordUpdate = password =>
this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;