import './App.css';
import { useSelector } from 'react-redux';
import Login from './containers/Login';
import Todo from './containers/Todo';

function App({ firebase }) {
  const isAuth = useSelector((state) => !!state.auth.user);

  console.log(`isAuth`, isAuth);

  if (isAuth)
    return (
      <div className="todoWrapper">
        <Todo />
      </div>
    );
  return <Login firebase={firebase} />;
}

export default App;
