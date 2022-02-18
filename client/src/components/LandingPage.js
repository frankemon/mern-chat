import React from 'react';
import { Link } from 'react-router-dom';
import chatScreenshot from '../icons/chatScreenshot.png';

const LandingPage = () => {
  return (
    <section>
      <div className="flex mx-auto justify-center md:align-center items-center space-x-5 mt-10 mb-10">
        <div className="hidden md:block">
          <img className="h-96 w-auto" src={chatScreenshot} alt="Screenshot of chat" />
        </div>
        <div className="flex flex-col justify-center text-center space-y-3 h-96 w-72 rounded-lg bg-blue-600">
          <p className="text-2xl pl-5 pr-5">
            Welcome to ChasChat, a simple chatroom using MERN stack
          </p>
          <Link to={`/login`}>
            <button className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900">
              Login
            </button>
          </Link>
          <Link to={`/register`}>
            <button className="py-1 px-2 rounded w-32 bg-yellow-500 hover:bg-red-200 text-indigo-900">
              Register
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
