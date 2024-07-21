
import React, { useState, useEffect } from 'react';
import "./admin_login.css";
import { useHistory } from 'react-router-dom';


export default function Admin_login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();
  


  const handleLogin = () => {
    const adminEmail = 'Fodrixx@gmail.com';
    const adminPassword = 'Fodri$7020';

    if (email === adminEmail && password === adminPassword) {
      history.push(`/Admin_dashboard`);
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <section className='admin-section'>
        <div className="form-box-login">
          <div className="form-value">
            <form>
              <h2 className='login_head'>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <button className='admin_button' onClick={handleLogin}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
