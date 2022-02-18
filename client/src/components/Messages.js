import React from 'react';
import PropTypes from 'prop-types';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const Messages = ({ messages, name }) => {
  Messages.propTypes = {
    messages: PropTypes.array,
    name: PropTypes.string,
  };
  return (
    <ScrollToBottom className="pl-5 pr-5 h-72">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
