import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBz6LmfsGca8Rrfn_958NVEScVMRXG7xzc",
  authDomain: "shoplogin-e9f76.firebaseapp.com",
  databaseURL: "https://shoplogin-e9f76.firebaseio.com",
  projectId: "shoplogin-e9f76",
  storageBucket: "shoplogin-e9f76.appspot.com",
  messagingSenderId: "540732633818"
};

let auth;
let db;

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }
    auth = app.auth();
    db = app.firestore();
  }

  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return auth.signOut();
  }

  async register(name, email, password) {
    await auth.createUserWithEmailAndPassword(email, password);
    return auth.currentUser.updateProfile({
      displayName: name
    });
  }

  addQuote(quote) {
    if (!auth.currentUser) {
      return alert("Not authorized");
    }

    return db.doc(`users_codedamn_video/${auth.currentUser.uid}`).set({
      quote
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return auth.currentUser && auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    const quote = await db
      .doc(`users_codedamn_video/${auth.currentUser.uid}`)
      .get();
    return quote.get("quote");
  }
}
export default new Firebase();
