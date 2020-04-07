import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMy4fxSpSuZbvNp1E_s2FblikalELpFqg",
    authDomain: "clothing-website-790c4.firebaseapp.com",
    databaseURL: "https://clothing-website-790c4.firebaseio.com",
    projectId: "clothing-website-790c4",
    storageBucket: "clothing-website-790c4.appspot.com",
    messagingSenderId: "877214814642",
    appId: "1:877214814642:web:8b87d61af8acc4a27d94ab",
    measurementId: "G-7H2MEELV8H"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('Error creating user', error.message);
        }
        
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () =>  console.log(auth.signInWithPopup(provider));

  export default firebase;