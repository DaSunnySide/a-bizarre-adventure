import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyB4WSN1xpkGZcbRe2XcVH5jOlbFBHXEx7w",
    authDomain: "the-helping-hand-6e3a0.firebaseapp.com",
    databaseURL: "https://the-helping-hand-6e3a0.firebaseio.com",
    projectId: "the-helping-hand-6e3a0",
    storageBucket: "the-helping-hand-6e3a0.appspot.com",
    messagingSenderId: "1086737653439"
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
