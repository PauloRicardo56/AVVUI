import { initializeApp } from 'firebase/app'
import { deleteDoc, doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore"
import * as Notifications from 'expo-notifications'
import { getMessaging } from 'firebase/messaging'

let firebaseApp
let db

// Initialize Firebase app and Firestore only once
function initializeFirebase(firebaseConfig) {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig)
    db = getFirestore(firebaseApp)
  }
}

function getFirestoreDB() {
  if (!db) {
    throw new Error("Firebase has not been initialized. Call initializeFirebase(firebaseConfig) first.")
  }
  return db
}

// GET
async function getFirestoreDoc(collection, document) {
    const db = getFirestoreDB()
    return await getDoc(doc(db, collection, document))
}

function eventListener(collection, document, completion) {
    const db = getFirestoreDB()
    const unsub = onSnapshot(doc(db, collection, document), (doc) => {
      completion(doc.data())
    })
  
    return unsub
}

// PUSH
async function insertIndexZeroFirebaseArray(collectionName="", docName="", fieldName, data) {
    const currentArray = (await getFirestoreDoc(collectionName, docName))[fieldName]
    const updatedArray = [data, ...currentArray]
    const newObject = {
      [fieldName]: updatedArray
    }
  
    pushFirebaseDoc(collectionName, docName, newObject)
}

async function pushFirebaseDoc(collectionName="", docName="", data) {
    const db = getFirestoreDB()
    await setDoc(doc(db, collectionName, docName), data);
}

// DELETE
async function deleteFirebaseDoc(collectionName="", docName="") {
    const db = getFirestoreDB()
    await deleteDoc(doc(db, collectionName, docName));
}

// Notifications
const requestPermission = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
}

async function getFCMToken() {
    const messaging = getMessaging(firebaseApp)
    console.log(111111)
    getToken(messaging, { vapidKey: "" } ).then((currentToken) => {
        if (currentToken) {
            // Sendo token to server
            console.log('Token: ', currentToken)
        } else {
            // Show permission UI
            console.log('No registration token available. Request permission to generate one.')
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    })
}

// async function getFCMToken() {
//     let token
//     try {
//         const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
//         if (!projectId) {
//             throw new Error('Project ID not found');
//         }
//         token = (
//             await Notifications.getExpoPushTokenAsync({
//                 projectId,
//             })
//         ).data;
//         console.log(token);
//     } catch (e) {
//         token = `${e}`;
//     }
//     return token
// }

export { getFirestoreDoc }
export { eventListener }
export { insertIndexZeroFirebaseArray }
export { pushFirebaseDoc }
export { deleteFirebaseDoc }
export { initializeFirebase }
export { requestPermission }
export { getFCMToken }