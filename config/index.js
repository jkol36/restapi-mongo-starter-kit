var admin = require("firebase-admin");

var serviceAccount = require("../eday-firebase.json");

global.Promise = require('bluebird');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eday-89a15.firebaseio.com"
});