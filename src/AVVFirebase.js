import { initializeApp } from 'firebase/app'
import { deleteDoc, doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore"
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

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
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (status !== 'granted') {
        alert('Permission for notifications was denied');
    }
}

async function getFCMToken() {
    const token = await messaging().getToken()
    console.log('FCM Token:', token)
    // Send this token to your backend to register the device for notifications
}

export { getFirestoreDoc }
export { eventListener }
export { insertIndexZeroFirebaseArray }
export { pushFirebaseDoc }
export { deleteFirebaseDoc }
export { initializeFirebase }
export { requestPermission }
export { getFCMToken }