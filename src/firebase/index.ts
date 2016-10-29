import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    authDomain: 'fuzbal-d3001.firebaseapp.com',
    apiKey: 'AIzaSyDwvYrDYOD0DFRa_7pmWbkMQohglaAyIkw',
    databaseURL: 'https://fuzbal-d3001.firebaseio.com',
    storageBucket: 'fuzbal-d3001.appspot.com',
};

const firebaseAuthConfig = {
    method: AuthMethods.Anonymous,
    remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
