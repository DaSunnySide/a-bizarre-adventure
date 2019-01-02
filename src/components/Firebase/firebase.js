import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyAhuklgssTSN902BHdVg2qTYEWZpkCT0sw",
  authDomain: "joejoe-s-bizarre-adventure.firebaseapp.com",
  databaseURL: "https://joejoe-s-bizarre-adventure.firebaseio.com",
  projectId: "joejoe-s-bizarre-adventure",
  storageBucket: "joejoe-s-bizarre-adventure.appspot.com",
  messagingSenderId: "270527999695"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  //Authorization API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

    //User API

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref(`users`);

  }



export default Firebase;
