const firebase = require('firebase')
var config = {
    apiKey: "AIzaSyD-kNBl-z3rm4y_jIcoAvGWXD978D_MaLM",
    authDomain: "apii-1531b.firebaseapp.com",
    databaseURL: "https://apii-1531b.firebaseio.com",
    projectId: "apii-1531b",
    storageBucket: "apii-1531b.appspot.com",
    messagingSenderId: "143693342231",
    appId: "1:143693342231:web:89bf6f69274b4262591e52",
    measurementId: "G-R25MBEG4LV"
  
  };

firebase.initializeApp(config);
const db = firebase.firestore()
// db.enablePersistence()

const auth = firebase.auth()
const file = firebase.storage


module.exports = { db, auth, file }