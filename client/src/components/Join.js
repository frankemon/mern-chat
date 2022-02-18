import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <section>
      <div className="flex mx-auto justify-center items-center space-x-5 mt-10 mb-10">
        <div className="flex flex-col justify-center text-center space-y-3 h-96 w-72 rounded-lg bg-blue-600">
          <p className="text-2xl pl-5 pr-5">
            Welcome to ChasChat, a simple chatroom using MERN stack
          </p>
          <div>
            <input
              className="rounded text-black p-1"
              placeholder="Name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              className="rounded text-black p-1"
              placeholder="Room"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button
              className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900"
              type="submit"
            >
              Sign In
            </button>
          </Link>
          <Link to={'/'}>
            <button
              className="
            py-1
            px-2
            rounded
            w-32
            bg-red-300
            hover:bg-red-200
            text-indigo-900"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Join;
