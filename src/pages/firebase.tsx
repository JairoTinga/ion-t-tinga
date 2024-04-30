import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDk5H-W8wwx2501GlHGNUL-y82mW4P67i8",
    authDomain: "it35-tinga.firebaseapp.com",
    projectId: "it35-tinga",
    storageBucket: "it35-tinga.appspot.com",
    messagingSenderId: "642305914920",
    appId: "1:642305914920:web:1049f7811b83e1daa01d1d",
    measurementId: "G-6VNNS04YM2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}