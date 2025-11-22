import React from "react";
import  '../Pages/login.css'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <h1>☕ Coffee Corner</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="Register-text"> 
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;