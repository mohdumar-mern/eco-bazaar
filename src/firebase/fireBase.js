import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // For Authentication
import { getFirestore } from "firebase/firestore"; // For Firestore Database
import { getStorage } from "firebase/storage"; // For Storage (optional)



const config = {
    apiKey: "AIzaSyBprUt9INmeYXUP_VMEvvnmm5XUA-B1m80", 
    authDomain: "eco-bazaar-db.firebaseapp.com",
    projectId: "eco-bazaar-db",
    storageBucket: "eco-bazaar-db.firebasestorage.app",
    messagingSenderId: "746386281178",
    appId: "1:746386281178:web:58ddca7aade63296efcbe3"
  };

  // Initialize Firebase
  const app = initializeApp(config);

  export const auth = getAuth(app);
  export const fireStore = getFirestore(app);
  export const storage = getStorage(app);  // Optional, if you're using Firebase Storage

  // setUp google auth provider
  export const googleProvider = new GoogleAuthProvider();


  export default app;