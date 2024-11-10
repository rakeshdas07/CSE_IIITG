import { notify } from '../../helper/notify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useAuthContext } from '../../context/authContext';
import './AdminLogin.css';

const AdminLogin = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  //const { dispatch } = useAuthContext()
  const navigator = useNavigate()
  var json = ''


  notify('You have successfully logged in!')

  const handleLogin = async (e) => {
  
      e.preventDefault()
  
      const login = {email, password}
      setLoading(true)
      const response = await fetch('http://localhost:3030/api/users/admin-login', {
  
        method: 'POST',
        body: JSON.stringify(login),
        headers : {
          'Content-Type': 'application/json'
        }
      })

      setLoading(false)
      json = await response.json()
      notify(json, 'You have successfully logged in!')

      if(!response) {
        try {
          console.log(json)
        } catch(e) {
          throw new Error(e)
        }
      }

      if(response.ok) {
        try {
          localStorage.setItem('user', JSON.stringify(json))
          //dispatch({type: 'LOGIN', payload: json})
          setEmail('')
          setPassword('')
          navigator('/admin-dashboard')
        } catch(e) {
          throw new Error(e)
        }
      }
    }

  /*const [adminData, setAdminData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Dummy data for admin login
    const dummyData = {
      email: 'admin@example.com',
      password: 'admin123',
    };

    if (adminData.email === dummyData.email && adminData.password === dummyData.password) {
      setSuccess('Login Successful!');
      login(dummyData);  // Login using context
      navigate('/admin-dashboard');  // Redirect to Admin Dashboard
    } else {
      setError('INVALID EMAIL OR PASSWORD !');
    }
  };*/

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>


        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete='current-password'
            required
          />
          <button type="submit" onClick={handleLogin} disabled={loading}>{loading ?<>loading...</>:<>login</>}</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;