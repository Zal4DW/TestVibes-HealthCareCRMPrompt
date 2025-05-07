import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegistrationForm from '../components/Auth/RegistrationForm'; // Optional: or on a separate registration page

const LoginPage = () => {
  return (
    <div>
      <h1>Login or Register</h1>
      <LoginForm />
      <hr />
      {/* Optionally, include registration form on the same page or link to a separate one */}
      {/* <RegistrationForm /> */}
      <p>Don't have an account? <button onClick={() => alert('Navigate to registration - TBD')}>Register here</button></p>
      {/* We will later use React Router for navigation */}
    </div>
  );
};

export default LoginPage; 