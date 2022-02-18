import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../SessionContext';
import Modal from './Modal';
import Search from './Search';
import UserDataService from '../services/users';

function UsersList() {
  const { isAdmin } = useContext(SessionContext);
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    UserDataService.getAll()
      .then((response) => {
        setUserData(response.data);
        setSearchResults(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openModal = (user) => {
    setShowModal((prev) => !prev);
    setModalData(user);
  };

  const renderTableData = () => {
    return searchResults.map((user, index) => {
      const { username, email } = user;
      return (
        <tr key={index}>
          <td className="p-2">{username}</td>
          <td className="p-2">{email}</td>
          {isAdmin && (
            <td className="p-2">
              <button
                onClick={() => openModal(user)}
                className="py-1 px-3 rounded w-auto bg-yellow-500 hover:bg-red-200 text-indigo-900"
              >
                Edit
              </button>
            </td>
          )}
        </tr>
      );
    });
  };

  return (
    <section className="flex flex-col items-center">
      <Modal show={showModal} setShow={setShowModal} user={modalData} />
      <Search list={userData} setResults={setSearchResults} field="username" />
      <div className="space-x-5 w-auto h-auto mt-10 mb-10 md:w-2/3 mx-auto">
        <div className="bg-indigo-700 text-center rounded-lg">
          <table className="w-full">
            <tbody>
              <tr className="border-b-2">
                <th className="p-2 bg-blue-400 rounded-tl-lg">Username</th>
                <th className="p-2 bg-blue-400">Email</th>
                {isAdmin && <th className="p-2 bg-blue-400 rounded-tr-lg">Action</th>}
              </tr>
              {renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default UsersList;
