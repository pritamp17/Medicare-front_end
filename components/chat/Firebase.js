import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
     apiKey: "",
    authDomain: "",
    projectId: "medicare-chat-74db9",
    storageBucket: "",
    messagingSenderId: "987760378628",
    appId: ""
  };
  
//  const firebaseApp = firebase.initializeApp(firebaseConfig)
 const firebaseApp = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();
 const db = firebaseApp.firestore()
export default db 
// export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore();
