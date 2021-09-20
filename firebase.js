import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCWvsAgI3Q8rR-qDcGr67LyF3d16jT2iqU',
  authDomain: 'amzn-two.firebaseapp.com',
  projectId: 'amzn-two',
  storageBucket: 'amzn-two.appspot.com',
  messagingSenderId: '808465613399',
  appId: '1:808465613399:web:ceeab53422db25dd6f1912',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
