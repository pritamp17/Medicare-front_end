import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
     apiKey: "AIzaSyANM9PYBK-4KcvZkJ7iY62oE_COjJKq8DM",
    authDomain: "medicare-chat-74db9.firebaseapp.com",
    projectId: "medicare-chat-74db9",
    storageBucket: "medicare-chat-74db9.appspot.com",
    messagingSenderId: "987760378628",
    appId: "1:987760378628:web:2f879a72c34b394bab0651"
  };
  
//  const firebaseApp = firebase.initializeApp(firebaseConfig)
 const firebaseApp = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();
 const db = firebaseApp.firestore()
export default db 
// export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore();
