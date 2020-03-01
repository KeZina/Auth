import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQlDmeOy5XflSqyrBvWHSvRomexqNdpbg",
    authDomain: "authwithfirebaseandreact.firebaseapp.com",
    databaseURL: "https://authwithfirebaseandreact.firebaseio.com",
    projectId: "authwithfirebaseandreact",
    storageBucket: "authwithfirebaseandreact.appspot.com",
    messagingSenderId: "993659408117",
    appId: "1:993659408117:web:0349407b0efff80c067fbc"
};

firebase.initializeApp(config);

export default firebase;