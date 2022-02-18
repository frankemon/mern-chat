import http from '../http-common';

const getAll = () => {
  return http.get('/users');
};

const create = (data) => {
  return http.post('/users', data);
};

const update = (id, username) => {
  return http.put(`/users/${id}`, username);
};

const remove = (id) => {
  return http.delete(`/users/${id}`);
};

const UserDataService = {
  getAll,
  create,
  update,
  remove,
};

export default UserDataService;
