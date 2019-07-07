import firebase from 'firebase'
require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore(fire);
const auth = firebase.auth();

export {
  firebaseConfig,
  db,
  storage,
  auth,
  fire
};
