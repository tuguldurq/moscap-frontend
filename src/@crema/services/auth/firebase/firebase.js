import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAmENCcvdRzJ184flGiJKSRsxcJ2xyByIc',
  authDomain: 'moscap-9b638.firebaseapp.com',
  projectId: 'moscap-9b638',
  storageBucket: 'moscap-9b638.appspot.com',
  messagingSenderId: '709909857719',
  appId: '1:709909857719:web:c2513bed9c6c7dbcda9432',
  measurementId: 'G-2Z7V1BTYT9',

  // apiKey: 'AIzaSyAzL_2jiVBhmiIUFGs2z6-cDR-Hgoedh3k',
  // authDomain: 'crema-react.firebaseapp.com',
  // databaseURL: 'https://crema-react.firebaseio.com',
  // projectId: 'crema-react',
  // storageBucket: 'crema-react.appspot.com',
  // messagingSenderId: '369173776768',
  // appId: '1:369173776768:web:895ded916749deebd31965',
  // measurementId: 'G-976YVMRB4R',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
