import { useState, useEffect } from 'react';
import axios from 'axios';

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState('');
  const [privateData, setPrivateData] = useState('');

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
        },
      };
      try {
        const { data } = await axios.get('/api/private', config);
        setPrivateData(data.data);
      } catch (error) {
        sessionStorage.removeItem('authToken');
        setError('You are not authorized please login');
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    sessionStorage.removeItem('authToken');
    history.push('/login');
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div>{privateData}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default PrivateScreen;
