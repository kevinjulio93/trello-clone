import React from 'react';
import './App.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Login from './components/login/login';

const firebaseConfig = {
  apiKey: "AIzaSyCzMb5W5zC-U53AFT1P2_sACSXMtWABdEU",
  authDomain: "trello-clone-4d55b.firebaseapp.com",
  projectId: "trello-clone-4d55b",
  storageBucket: "trello-clone-4d55b.appspot.com",
  messagingSenderId: "454291927385",
  appId: "1:454291927385:web:86ca08bdff64b37b5b1c48",
  measurementId: "G-LR09SMQCHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className='trello-login-view'>
      <Login></Login>
    </div>
  );
}

export default App;
