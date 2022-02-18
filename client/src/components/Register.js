import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import chatScreenshot from '../icons/chatScreenshot.png';

const Register = ({ history }) => {
  Register.propTypes = {
    history: PropTypes.any,
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('authToken')) {
      history.push('/about');
    }
  }, [history]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const { data } = await axios.post(
        'https://conventus.herokuapp.com/api/auth/register',
        {
          username,
          email,
          password,
        },
        config,
      );
      history.push('/login');
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <section>
      <div className="flex mx-auto justify-center items-center space-x-5 mt-10 mb-10">
        <div className="hidden md:block">
          <img className="h-96 w-auto" src={chatScreenshot} alt="Screenshot of chat" />
        </div>
        {/* card */}
        <div className="flex flex-col justify-center text-center space-y-3 p-3 h-auto w-72 rounded-lg bg-blue-600">
          <p className="text-2xl pl-5 pr-5">
            Welcome to ChasChat, a simple chatroom using MERN stack
          </p>
          <h3 className="text-2xl">Register</h3>
          {error && <span className="text-red">{error}</span>}
          <form onSubmit={handleRegister} className="space-y-3 flex flex-col items-center">
            <div className="flex flex-col">
              <label htmlFor="name">Username:</label>
              <input
                className="rounded text-black p-1"
                type="text"
                required
                id="name"
                placeholder="JaneDoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Email:</label>
              <input
                className="rounded text-black p-1"
                type="text"
                required
                id="email"
                placeholder="janedoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="name">Password:</label>
              <input
                className="rounded text-black p-1 mb-3"
                type="password"
                required
                id="password"
                placeholder="123abc"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900"
                type="submit"
              >
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
