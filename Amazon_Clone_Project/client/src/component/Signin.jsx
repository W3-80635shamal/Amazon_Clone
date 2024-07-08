
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signinUser } from '../services/user';
import 'react-toastify/dist/ReactToastify.css';

export function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSignin = async () => {
    if (email.length === 0) {
      toast.warn('Enter email');
    } else if (password.length === 0) {
      toast.warn('Enter password');
    } else {
      const result = await signinUser(email, password);
      if (result.status === 'success') {
        toast.success('Successfully signed in');
        navigate('/navbar'); 
      } else {
        toast.error(result.error);
      }
    }
  };

  return (
    <>
      <h1 className="title">Signin</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
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
              <div>
                Don't have an account? <Link to="/signup">Signup here</Link>
              </div>
              <button onClick={onSignin} className="btn btn-primary mt-2">
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Signin;
