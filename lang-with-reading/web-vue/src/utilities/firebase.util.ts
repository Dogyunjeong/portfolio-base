import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyDFdqBw9RS_41v1J2gNNzYt8FVhJq3Wh-E',
  authDomain: 'lang-reading.firebaseapp.com',
  databaseURL: 'https://lang-reading.firebaseio.com',
  projectId: 'lang-reading',
  storageBucket: 'lang-reading.appspot.com',
  messagingSenderId: '1071976384748',
  appId: '1:1071976384748:web:37d38624fc62e8991abdc9',
  measurementId: 'G-7E8GCXVRV7',
}
// Initialize Firebase
console.log('firebase: ', firebase)
firebase.initializeApp(firebaseConfig)
firebase.analytics()
console.log('=== firebase initialized ===')

export default firebase
