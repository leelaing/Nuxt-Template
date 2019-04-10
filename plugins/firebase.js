import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  }
  firebase.initializeApp(config)

}

export const db = firebase.database()
export const auth = firebase.auth()