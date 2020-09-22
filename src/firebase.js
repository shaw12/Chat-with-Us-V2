import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvG7Baj_OnKYfFULuFA0_YYcYWKnH63wQ",
    authDomain: "slack-clone-412.firebaseapp.com",
    databaseURL: "https://slack-clone-412.firebaseio.com",
    projectId: "slack-clone-412",
    storageBucket: "slack-clone-412.appspot.com",
    messagingSenderId: "972119449668",
    appId: "1:972119449668:web:cc21e246a6d2d0e4a79c11",
    measurementId: "G-9BY1SXC61L"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;