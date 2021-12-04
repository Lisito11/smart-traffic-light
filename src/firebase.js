import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKILhoHMHuFgi8g4ZOE99Hr3c89lvGRUQ",
    authDomain: "smartsemaforo.firebaseapp.com",
    databaseURL: "https://smartsemaforo-default-rtdb.firebaseio.com",
    projectId: "smartsemaforo",
    storageBucket: "smartsemaforo.appspot.com",
    messagingSenderId: "1041688712817",
    appId: "1:1041688712817:web:6f84f0bffbfd5e4dc02dd0",
    measurementId: "G-Y80RGHM91K"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        conectado: 1
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    auth.signOut();
  };

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };