import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-FX_3RpqX7jzFU-6xjI0USq6Bq6hM-T8",
    authDomain: "teamvoting-c1fd5.firebaseapp.com",
    databaseURL: "https://teamvoting-c1fd5-default-rtdb.firebaseio.com",
    projectId: "teamvoting-c1fd5",
    storageBucket: "teamvoting-c1fd5.appspot.com",
    messagingSenderId: "412034100557",
    appId: "1:412034100557:web:9fae7b8a09c9759c8f1b04"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();
