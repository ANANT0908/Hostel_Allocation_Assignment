import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCgHuS7CmjApqTt8OjJ5Z_kQ2MW6pChYV0",
    authDomain: "newprojects-d62c5.firebaseapp.com",
    projectId: "newprojects-d62c5",
    storageBucket: "newprojects-d62c5.appspot.com",
    messagingSenderId: "1062927762835",
    appId: "1:1062927762835:web:33353325608722d6425466",
    measurementId: "G-MSZHCT8LNQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;