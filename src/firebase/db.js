import { db } from './firebase';

export const doCreateUser = (uid, email, firstName, lastName) =>
  db.collection('users').doc(uid).set({
    uid,
    email,
    firstName,
    lastName
  });

export const onceGetOneUser = (uid) =>
  db.ref(`users/${uid}`).once('value');
