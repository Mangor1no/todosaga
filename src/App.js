import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Todo from './containers/Todo';

function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="todoWrapper">
      <Todo />
    </div>
  );
}

export default App;
