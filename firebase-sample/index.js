var firebase = require('firebase')

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

firebase.initializeApp(config)

var db = firebase.database();
var test = db.ref("test");

test.set({title:"example", text:'test'});
