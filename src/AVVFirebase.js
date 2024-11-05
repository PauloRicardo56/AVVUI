import { initializeApp } from '@react-native-firebase/app';
import { doc, getDoc, getFirestore } from '@react-native-firebase/firestore';
import messaging, { firebase } from '@react-native-firebase/messaging';

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

const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Notification permission granted.');
    } else {
        Alert.alert("Permission denied", "Enable notifications to receive updates.");
    }
}

export default requestPermission