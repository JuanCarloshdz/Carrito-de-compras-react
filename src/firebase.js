import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCfecgACCPDPOu9b314xlPOwbgsfqTLY_4",
  authDomain: "carrito-compras-3d600.firebaseapp.com",
  databaseURL: "https://carrito-compras-3d600.firebaseio.com",
  projectId: "carrito-compras-3d600",
  storageBucket: "carrito-compras-3d600.appspot.com",
  messagingSenderId: "706320171028",
  appId: "1:706320171028:web:b10b25ad58251c32dfe701",
  measurementId: "G-ZFZ330HTT9"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};
