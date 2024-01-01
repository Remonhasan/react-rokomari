import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";
import useLogin from '../hooks/useLogin';
import '../assets/css/admin.css';
import '../assets/js/scripts';

export default function Login() {

  const navigate = useNavigate();
  const { userCredentials, handleInputChange, login } = useLogin();
  
  const handleLogin = async (e) => {
    e.preventDefault();
      // Validation
      if (!userCredentials.email || !userCredentials.password) {
      toast.error("All fields are required !");
      return;
    }
    const { success, token } = await login();

    if (success) {
      // Redirect or perform actions for authenticated user
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      // Handle login error (e.g., display error message)
      console.error('Login Failed');
      // Handle error based on your application's logic (e.g., show error message)
    }
  };


  return (

    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">roKomari Login</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={handleLogin}>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" 
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={userCredentials.email}
                                                onChange={handleInputChange}
                                                />
                                                <label>Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword"
                                                type="password"
                                                placeholder="Enter password"
                                                name="password"
                                                value={userCredentials.password}
                                                onChange={handleInputChange}
                                                
                                                />
                                                <label>Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input"  type="checkbox" value="" />
                                                <label className="form-check-label" >Remember Password</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small">Forgot Password?</a>
                                                <button type="submit" className="btn btn-primary btn-sm">
                                                  Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a>Need an account? <Link to="/register">Sign up!</Link></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
  )
}
