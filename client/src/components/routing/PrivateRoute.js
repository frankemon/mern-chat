import React, { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  PrivateRoute.propTypes = {
    component: PropTypes.func,
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem('authToken') ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
