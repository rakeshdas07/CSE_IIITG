// src/components/StudentDashboard/Login.js
import { notify } from '../../helper/notify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useAuthContext } from '../../context/authContext'; 
import './Login.css';  



const Login = () => {

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
      const response = await fetch('http://localhost:3030/api/users/login', {
  
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
          navigator('/student-dashboard')
        } catch(e) {
          throw new Error(e)
        }
      }
    }

  /*const [studentData, setStudentData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login } = useAuthContext();  // Get the login function from AuthContext
  const navigate = useNavigate();  // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');  // Reset error message before submission
    setSuccess('');  // Reset success message before submission

    // Dummy data for student login
    const dummyData = {
      email: 'student@example.com',
      password: 'student123',
    };

    // Check login credentials against the dummy data
    if (studentData.email === dummyData.email && studentData.password === dummyData.password) {
      setSuccess('Login Successful!');
      login({ email: studentData.email });  // Update the user data in AuthContext
      navigate('/student-dashboard');  // Redirect to Student Dashboard
    } else {
      setError('INVALID EMAIL OR PASSWORD !');
    }
  };
*/
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Student Login</h2>
      
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

export default Login;
