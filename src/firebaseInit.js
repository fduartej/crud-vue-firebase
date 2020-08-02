import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyASbp9MaarvLj6v0utUJPQoG86zuZZJChE",
  authDomain: "webapp-ee6e3.firebaseapp.com",
  databaseURL: "https://webapp-ee6e3.firebaseio.com",
  projectId: "webapp-ee6e3",
  storageBucket: "webapp-ee6e3.appspot.com",
  messagingSenderId: "173051186312",
  appId: "1:173051186312:web:440f870dcabadc015be33d"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
