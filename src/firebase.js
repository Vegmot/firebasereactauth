import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYp_bT3H7yE2LIu5WuYaDs4WD56VnhVA4',
  authDomain: 'agthentication-dev.firebaseapp.com',
  projectId: 'agthentication-dev',
  storageBucket: 'agthentication-dev.appspot.com',
  messagingSenderId: '457251498354',
  appId: '1:457251498354:web:6a2e589d84c09e1f1915eb',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
