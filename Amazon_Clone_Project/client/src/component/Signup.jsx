// src/components/Signup.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signupUser } from '../services/user';
import 'react-toastify/dist/ReactToastify.css';

export function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const onSignup = async () => {
    if (firstName.length === 0) {
      toast.warn('Enter first name');
    } else if (lastName.length === 0) {
      toast.warn('Enter last name');
    } else if (email.length === 0) {
      toast.warn('Enter email');
    } else if (password.length === 0) {
      toast.warn('Enter password');
    } else if (confirmPassword.length === 0) {
      toast.warn('Enter confirm password');
    } else if (password !== confirmPassword) {
      toast.warn('Passwords do not match');
    } else {
      const result = await signupUser(firstName, lastName, email, password);
      if (result.status === 'success') {
        toast.success('Successfully registered the user');
        navigate('/signin');
      } else {
        toast.error(result.error);
      }
    }
  };

  return (
    <>
      <h1 className="title">Signup</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="abc@test.com"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="xxxxxxxx"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="xxxxxxxx"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <div>
                Already have an account? <Link to="/signin">Sign in here</Link>
              </div>
              <button onClick={onSignup} className="btn btn-primary mt-2">
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Signup;
