import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQ8dZ1nCFug-zCOmXI7RPgjN4bMqTcgc0",
  authDomain: "crwn-clothing-db-93d09.firebaseapp.com",
  projectId: "crwn-clothing-db-93d09",
  storageBucket: "crwn-clothing-db-93d09.appspot.com",
  messagingSenderId: "62512742813",
  appId: "1:62512742813:web:2ff4e1ceb6bf65f1b52f74"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)