import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ message, setMessage, sendMessage }) => {
  Input.propTypes = {
    message: PropTypes.any,
    setMessage: PropTypes.any,
    sendMessage: PropTypes.any,
  };
  return (
    <form className="flex sticky bottom-0">
      <input
        className="rounded-bl-lg text-black p-2 bg-gray-200 w-9/12"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />
      <button
        className="inline-block uppercase py-2 px-2 rounded-br-lg w-3/12 bg-green-300 hover:bg-green-200 text-indigo-900"
        onClick={(e) => sendMessage(e)}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
