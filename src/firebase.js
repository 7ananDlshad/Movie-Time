import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDIiN9PRkzGCfKb0z2cxIR0TRDCN9NZF1E',
  authDomain: 'movie-49698.firebaseapp.com',
  projectId: 'movie-49698',
  storageBucket: 'movie-49698.appspot.com',
  messagingSenderId: '969410738630',
  appId: '1:969410738630:web:36834af3f17cf65510dac7',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export const databaseRef = database.collection('movie');

export default firebase;
