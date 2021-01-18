import React, {createContext} from 'react';

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "./firebase"


const FirebaseContext = createContext()

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
    getCurrentuser: () => {
        return firebase.auth().currentUser
    },

    createUser: async (user) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            const uid = Firebase.getCurrentuser().uid;

            await db.collection("users").doc(uid).set({
                name: user.name,
                email: user.email,
            })

            
            delete user.password

            return {...user, uid}
        } catch (error) {
            console.log("error @createUser: ", error.message)
        }
    },

    getUserInfo: async (uid) => {
        try {
            const user = await db.collection("users").doc(uid).get()

            if(user.exists) {
                return user.data()
            }
        } catch (error) {
            console.log("Error @getUserInfo: ", error)
        }
    }
}

const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>;
}

export { FirebaseContext, FirebaseProvider };