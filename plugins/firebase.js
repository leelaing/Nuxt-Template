import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDZXaU_ng1zOu_HDyCJFc2CvriTzfSdv0I",
    authDomain: "big2tiny-38f5a.firebaseapp.com",
    databaseURL: "https://big2tiny-38f5a.firebaseio.com",
    projectId: "big2tiny-38f5a",
    storageBucket: "big2tiny-38f5a.appspot.com",
    messagingSenderId: "709284831928"
  }
  firebase.initializeApp(config)

}

export const db = firebase.database()
export const auth = firebase.auth()