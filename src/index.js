import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from '@react-firebase/auth';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './data/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBssaGeetvO1GW7fEjF7VEj3mmY6EmTwNI',
  authDomain: 'todosaga-c25bd.firebaseapp.com',
  databaseURL: 'https://todosaga-c25bd-default-rtdb.firebaseio.com',
  projectId: 'todosaga-c25bd',
  storageBucket: 'todosaga-c25bd.appspot.com',
  messagingSenderId: '480026199700',
  appId: '1:480026199700:web:d61578afc67b65017a1681',
  measurementId: 'G-MRSWGVXP5S',
};

ReactDOM.render(
  <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
