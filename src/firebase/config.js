import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJ6NIzIucm-03JsnCpQAy5eqPahChXMVQ",
    authDomain: "react-fire-gallery.firebaseapp.com",
    projectId: "react-fire-gallery",
    storageBucket: "react-fire-gallery.appspot.com",
    messagingSenderId: "158611840382",
    appId: "1:158611840382:web:370cac6d2f1958f3b9272f"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectStorage, projectFirestore, timestamp }