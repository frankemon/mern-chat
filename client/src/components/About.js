import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="md:mt-10 mb-10">
        <div className="flex flex-col justify-center items-center text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xl text-gray-200">ChasChat</span>
        </div>
      </div>
      <section className="md:w-1/2 mx-5">
        <p>
          ChasChat is a small school project written for Chas Academy using the MERN stack. MERN
          stacks are created using MongoDB, Express, React and NodeJS.
        </p>
        <br />
        <p>
          This is a simple chat platform offering four persistent chat rooms as well as the ability
          to create custom rooms which other users can join by simply typing the room name and click
          join. Messages are currently not stored on a database and therefore cannot be searched,
          favorited or saved for future reference. While this is not ideal, it may be implemented in
          the future if ChasChat is a project I decide to work on in the future.
        </p>
      </section>
    </div>
  );
};

export default About;
