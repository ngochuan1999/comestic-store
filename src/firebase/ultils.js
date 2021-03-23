import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './config'



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const  GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });



export const handleUserProfile = async ({userAuth, additionalData}) => {
    if(!userAuth) return;
    const { uid } = userAuth;
    console.log(userAuth);
    const useRef = firestore.doc(`users/${uid}`);
   
    const snapshot = await useRef.get();

    if(!snapshot.exists) {
        const { displayName , email} = userAuth;
        const timestamp = new Date();
        const userRoles = ['user']

        try {
            await useRef.set({
                displayName,
                email,
                createDate: timestamp,
                userRoles,
                ...additionalData
            })
            
        } catch (error) {
            
        }
    }

    return useRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    } )
}





