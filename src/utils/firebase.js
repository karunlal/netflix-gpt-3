// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2jc9M-tAlKd-Bl6th1SrM1GevIapFpNo',
  authDomain: 'netflix-gpt-3-c53f4.firebaseapp.com',
  projectId: 'netflix-gpt-3-c53f4',
  storageBucket: 'netflix-gpt-3-c53f4.appspot.com',
  messagingSenderId: '1042225029346',
  appId: '1:1042225029346:web:ed13e186ba53a20ac77ebb',
  measurementId: 'G-WY3629H7YC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
