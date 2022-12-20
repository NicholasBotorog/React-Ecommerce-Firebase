import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCQ8dZ1nCFug-zCOmXI7RPgjN4bMqTcgc0",
  authDomain: "crwn-clothing-db-93d09.firebaseapp.com",
  projectId: "crwn-clothing-db-93d09",
  storageBucket: "crwn-clothing-db-93d09.appspot.com",
  messagingSenderId: "62512742813",
  appId: "1:62512742813:web:2ff4e1ceb6bf65f1b52f74"
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()


// Auth with Google Account
export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => { 
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot)

  // if user data does not exist 
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date() 

    try{
      await setDoc(userDocRef, {
        displayName, 
        email,
        createdAt,
        ...additionalInformation,
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userDocRef
}


// Auth with Email and Password 
export const authWithEmailAndPassword = async(email, password) => { 
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

// Sign In With Email and Password 
export const SignInUser = async(email, password) => { 
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}