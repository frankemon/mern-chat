import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="hidden md:flex flex-col justify-between items-center border-t shadow-lg fixed bottom-0 inset-x-0 bg-indigo-900 overflow-auto">
      <div>
        <div className="flex justify-center items-center mt-1 mb-1 text-blue-400">
          <svg
            className="h-10 w-10"
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
          <span className="text-gray-200">ChasChat</span>
        </div>
        <nav className="flex justify-center space-x-5">
          <Link to={`/about`}>
            <p>About</p>
          </Link>
          <Link to={`/policy`}>
            <p>User Policy</p>
          </Link>
          <Link to={`/login`}>
            <p>Login</p>
          </Link>
        </nav>
      </div>
      <div className="flex md:space-x-5 justify-between">
        <p className="mb-1">&copy; Frankemon 2021</p>
        <p>
          <a href="https://github.com/frankemon">GitHub</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/francois-hugo-570183102/">LinkedIn</a>
        </p>
        <p>
          <a href="https://chasacademy.se/featured-content/fullstack-webbutvecklare/">
            Chas Academy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
