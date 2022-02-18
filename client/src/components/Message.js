import React from 'react';
import PropTypes from 'prop-types';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
  Message.propTypes = {
    message: PropTypes.object,
    user: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
  };
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="flex justify-end flex-end pt-2 mt-1 pb-2">
      <p className="flex items-center pr-2 italic">{trimmedName}</p>
      <div className="inline-block p-2 w-4/5 bg-blue-400 rounded">
        <p className="w-full float-left break-words">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start flex-end pt-2 mt-1 pb-2">
      <div className="inline-block p-2 w-4/5 bg-gray-200 rounded">
        <p className="w-full float-left break-words">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="flex items-center pl-2 italic">{user}</p>
    </div>
  );
};

export default Message;
