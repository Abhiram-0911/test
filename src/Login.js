import React, { useState } from 'react';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Very small client-side validation
    if(!email || !password){
      setMessage('Please enter email and password');
      return;
    }
    // Mock login success
    setMessage('Login successful (mock)');
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign in</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}
