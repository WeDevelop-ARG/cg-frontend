import * as firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyA-4usxxlhMPx_sUECQVami7W2XtE2LWik',
  authDomain: 'compras-grupales-prod.firebaseapp.com',
  databaseURL: 'https://compras-grupales-prod.firebaseio.com',
  projectId: 'compras-grupales-prod',
  storageBucket: 'compras-grupales-prod.appspot.com',
  messagingSenderId: '500675740051',
  appId: '1:500675740051:web:e032bd39b4131a7eaee866',
  measurementId: 'G-5F8M57Z9WG'
}

if (process.env.NODE_ENV === 'production') {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}
