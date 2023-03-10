import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'



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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()



// Uploading the local database to Firebase
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => { 
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectToAdd.forEach((object) => { 
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  // console.log('done')
}



// Retriving the Database from Firebase to use it on our App
export const getCategoriesAndDocuments = async() => { 
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => { 
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}



// Auth with Google Account
export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => { 
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)


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

// SINGING USER OUT 
export const signOutUser = async() => {
  signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
}