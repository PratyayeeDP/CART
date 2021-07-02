import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6WF9CQLEmRBrEtbGuUo7ca0IXSLbSGi8",
    authDomain: "cart-243cb.firebaseapp.com",
    projectId: "cart-243cb",
    storageBucket: "cart-243cb.appspot.com",
    messagingSenderId: "655069194553",
    appId: "1:655069194553:web:7f620f852e7655500360e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
