import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';
import store from './data/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/auth';
import Login from './containers/Login';

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
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => {
        if (isSignedIn)
          return (
            <Provider store={store}>
              <App />
            </Provider>
          );
        return <Login firebase={firebase} />;
      }}
    </FirebaseAuthConsumer>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
