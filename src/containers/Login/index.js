import React, { useCallback, useState } from 'react';
import './style.scss';

const Login = ({ firebase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        alert(error);
      }
    },
    [email, password, firebase]
  );

  return (
    <div className="wrapper">
      <div className="login-text">
        <div className="text">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" className="login-btn" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
