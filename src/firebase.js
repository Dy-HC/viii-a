
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from 'firebase/messaging'

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAPoP7BSUeFFgRi9iywJA77tYiZsbJwR6s",
  authDomain: "viii-1-7242f.firebaseapp.com",
  projectId: "viii-1-7242f",
  storageBucket: "viii-1-7242f.appspot.com",
  messagingSenderId: "912856372437",
  appId: "1:912856372437:web:e8df28160e44b1fafabe5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const messaging = getMessaging(app);
