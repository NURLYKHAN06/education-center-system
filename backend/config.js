export let firebase = null;
export let auth = null;
export let firestore = null;

const firebaseConfig = {
  apiKey: "AIzaSyD39vMXlWjfv6Lk3fTXPM_8rOr9esnq7Ac",
  authDomain: "education-center-87385.firebaseapp.com",
  databaseURL: "https://education-center-87385.firebaseio.com",
  projectId: "education-center-87385",
  storageBucket: "education-center-87385.appspot.com",
  messagingSenderId: "822968885278",
  appId: "1:822968885278:web:dcaf6f76581d9a541bce0f",
};

if (process.browser) {
  firebase = window.firebase;
  firebase.initializeApp(firebaseConfig);

  auth = firebase.auth();
  firestore = firebase.firestore();
}
