import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyBaS9tIdm5ZvG4QM6BhKKqjjTnqRuCs-U0",
    authDomain: "c-72-7412e.firebaseapp.com",
    projectId: "c-72-7412e",
    storageBucket: "c-72-7412e.appspot.com",
    messagingSenderId: "483578177309",
    appId: "1:483578177309:web:106592b9404e0efd7923f4" 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()                                   