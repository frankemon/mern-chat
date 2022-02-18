import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SessionContext } from '../SessionContext';
import chatScreenshot from '../icons/chatScreenshot.png';

const Rooms = ({ history }) => {
  Rooms.propTypes = {
    history: PropTypes.any,
  };

  const [room, setRoom] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('General');
  const { username } = useContext(SessionContext);

  const handleSelectRoom = (e) => {
    e.preventDefault();
  };

  const joinRoom = (roomName) => {
    history.push(`/chat?name=${username}&room=${roomName}`);
  };

  return (
    <section>
      <div className="flex mx-auto justify-center items-center space-x-5 w-auto h-auto mt-10 mb-10">
        <div className="hidden md:block">
          <img className="h-96 w-auto" src={chatScreenshot} alt="Screenshot of chat" />
        </div>
        <div className="flex flex-col justify-center text-center space-y-3 h-auto w-72 pt-3 pb-3 rounded-lg bg-blue-600">
          <p className="text-2xl pl-5 pr-5">Welcome back {username}</p>
          <div className="px-2">
            <p>Select a room below</p>
          </div>
          <div>
            <form onSubmit={handleSelectRoom} className="space-y-3">
              <div>
                <div className="mb-1">
                  <label htmlFor="room" className="text-xl">
                    Room
                  </label>
                </div>
                <select
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  name="selectedRoom"
                  id="selectedRoom"
                  className="w-3/5 text-black p-1 rounded mb-3"
                >
                  <option value="General">General</option>
                  <option value="Games">Games</option>
                  <option value="Music">Music</option>
                  <option value="Movies">Movies & Shows</option>
                </select>
              </div>
              <button
                onClick={() => joinRoom(selectedRoom)}
                className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900 mb-2"
              >
                Join
              </button>
            </form>
            <form className="space-y-3 pb-2">
              <div className="px-2">
                <p>Or create a custom room</p>
              </div>
              <div className="pb-3">
                <input
                  className="rounded text-black p-1 w-3/5"
                  placeholder="Room"
                  type="text"
                  onChange={(event) => setRoom(event.target.value)}
                />
              </div>
              <button
                className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900"
                onClick={() => joinRoom(room)}
                disabled={!room}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
