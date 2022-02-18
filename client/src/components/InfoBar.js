import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';

const InfoBar = ({ room }) => {
  InfoBar.propTypes = {
    room: PropTypes.object,
  };

  return (
    <div className="flex justify-between items-center rounded-t-lg h-14 w-full bg-blue-400 sticky top-0 z-10">
      <div className="flex items-center">
        <img className="onlineIcon ml-5 mr-5" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/rooms">
          <img className="mr-5" src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
