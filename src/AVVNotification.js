import messaging from '@react-native-firebase/messaging';

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