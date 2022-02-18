import React from 'react';

const Policy = () => {
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
        <div className="mb-10">
          <p>
            The Service provides a chat and social platform. The Service may allow you to
            participate in public and private chat rooms and to utilize messaging features to
            communicate with other users of the Service.
          </p>
          <br />
          <p>While using this Service, you may not:</p>
        </div>
        <div>
          <ul className="list-disc ml-10">
            <li>
              defame, libel, ridicule, mock, stalk, threaten, harass, intimidate or abuse anyone
            </li>
            <li>
              engage in conduct that is fraudulent or illegal or otherwise harmful to ChasChat or
              any other user
            </li>
            <li>attempt to obtain passwords or other private information from other members</li>
          </ul>
        </div>
        <div className="mt-10">
          <p>
            By registering with this Service you automatically agree to not partake in any of the
            above mentioned activities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Policy;
