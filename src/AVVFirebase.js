import { initializeApp } from 'firebase/app';
import { deleteDoc, doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";

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

// PUSH
export async function insertIndexZeroFirebaseArray(collectionName="", docName="", fieldName, data) {
    const currentArray = (await getFirestoreDoc(collectionName, docName))[fieldName]
    const updatedArray = [data, ...currentArray]
    const newObject = {
      [fieldName]: updatedArray
    }
  
    pushFirebaseDoc(collectionName, docName, newObject)
}

export async function pushFirebaseDoc(collectionName="", docName="", data) {
    await setDoc(doc(db, collectionName, docName), data);
}

// DELETE
async function deleteFirebaseDoc(collectionName="", docName="") {
    await deleteDoc(doc(db, collectionName, docName));
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
export { deleteFirebaseDoc }