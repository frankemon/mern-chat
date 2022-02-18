import React, { useState } from 'react';
import Form from 'react-validation/build/form';
import PropTypes from 'prop-types';
import UserDataService from '../services/users';

const Modal = ({ show, setShow, user }) => {
  Modal.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.bool,
    user: PropTypes.string,
  };

  const [username, setUsername] = useState('');

  const handleDeleteUser = (e) => {
    e.preventDefault();
    UserDataService.remove(user._id)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSetUsername = (event) => {
    const name = event.target.value;
    setUsername(name);
  };

  const handleUpdateUsername = (e) => {
    e.preventDefault();
    UserDataService.update(user._id, { username })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {show ? (
        <div className="overlay bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
          <div className="h-auto w-auto bg-blue-400 rounded mx-auto p-3">
            <div className="flex justify-between">
              <p className="text-xl">Edit User: {user.username} </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setShow((prev) => !prev)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center pt-1 flex flex-col">
              <Form onSubmit={handleUpdateUsername}>
                <div className="space-y-3 flex flex-col">
                  <label>Username: </label>
                  <input
                    value={username}
                    onChange={handleSetUsername}
                    type="text"
                    placeholder="New username"
                    className="rounded p-1 text-black"
                  ></input>
                  <div className="text-right space-x-3">
                    <button
                      type="submit"
                      className="py-1 px-2 rounded w-32 bg-green-300 hover:bg-green-200 text-indigo-900"
                      disabled={!username}
                    >
                      Save
                    </button>
                    <button
                      // onClick={() => deleteUser(user._id)}
                      onClick={handleDeleteUser}
                      className="py-1 px-2 rounded w-32 bg-red-300 hover:bg-red-200 text-indigo-900"
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
