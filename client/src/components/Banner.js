import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SessionContext } from '../SessionContext';
import PropTypes from 'prop-types';

const Banner = ({ history }) => {
  Banner.propTypes = {
    history: PropTypes.any,
  };
  const { isLoggedIn, setLoggedIn, setUsername } = useContext(SessionContext);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('username');
    setLoggedIn(false);
    setUsername('');
    history.push('/login');
  };

  return (
    <header>
      <div className="lg:flex border-b justify-between md:mt-5">
        <div className="flex justify-center items-center md:ml-10">
          <svg
            className="h-12 w-12 text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">ChasChat</span>
        </div>
        <nav className="flex space-x-3 md:mt-5 mb-5 md:mr-10 justify-center">
          {isLoggedIn && (
            <>
              <Link to={`/rooms`}>
                <p>Rooms</p>
              </Link>
            </>
          )}
          <Link to={`/about`}>
            <p>About</p>
          </Link>
          <Link to={`/policy`}>
            <p>User Policy</p>
          </Link>
          {/* Only visible to moderators */}
          {isLoggedIn && (
            <>
              <Link to={`/users`}>
                <p>Users</p>
              </Link>
            </>
          )}
          {/* Only visible when logged in/out */}
          {!isLoggedIn && (
            <Link to={`/login`}>
              <button className="py-1 px-2 md:px-4 rounded bg-green-300 hover:bg-green-200 text-indigo-900">
                Login
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="py-1 px-2 md:px-4 rounded bg-red-300 hover:bg-red-200 text-indigo-900"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Banner);
