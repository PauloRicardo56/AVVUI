import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4wsF4qxwp04pUTS29dUidxXnsaToHqiY",
    authDomain: "aovivasco-438802.firebaseapp.com",
    projectId: "aovivasco-438802",
    storageBucket: "aovivasco-438802.appspot.com",
    messagingSenderId: "236345160786",
    appId: "1:236345160786:web:068b973796f3281dc29b8b"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// GET
async function getFirestoreDoc(collection, document) {
    return await getDoc(doc(db, collection, document))
}

function eventListener(collection, document, completion) {
    const unsub = onSnapshot(doc(db, collection, document), (doc) => {
      completion(doc.data())
    })
  
    return unsub
}

// const requestPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//                     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//         console.log('Notification permission granted.');
//     } else {
//         Alert.alert("Permission denied", "Enable notifications to receive updates.");
//     }
// }

export { getFirestoreDoc }
export { eventListener }