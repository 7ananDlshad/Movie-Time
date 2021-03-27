import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDLdrDkCBfKYQHRbZAAuCPAK3t2DvIEaok',
  authDomain: 'movie-cdf3c.firebaseapp.com',
  projectId: 'movie-cdf3c',
  storageBucket: 'movie-cdf3c.appspot.com',
  messagingSenderId: '489305636668',
  appId: '1:489305636668:web:13c74274c625c6b2b1e839',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export const databaseRef = database.collection('movie');

export default firebase;
