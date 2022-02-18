import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routing
import Join from './components/Join';
import Chat from './components/Chat';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import Policy from './components/UserPolicy';
import UsersList from './components/UsersList';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/routing/PrivateRoute';
import Rooms from './components/Rooms';
import history from './history';
import { SessionContext } from './SessionContext';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('authToken')) {
      setLoggedIn(true);
      const username = sessionStorage.getItem('username');
      setUsername(username);
      const isAdmin = sessionStorage.getItem('isAdmin');
      setIsAdmin(isAdmin);
      history.push('/');
    }
  }, []);

  return (
    <Router history={history}>
      <SessionContext.Provider
        value={{ isLoggedIn, setLoggedIn, username, setUsername, setIsAdmin, isAdmin }}
      >
        <Banner />
        <Switch>
          {/* Hidden routes */}
          <PrivateRoute path="/chat" component={Chat} />
          {/* <PrivateRoute path="/join" component={Join} /> */}
          <PrivateRoute path="/rooms" component={Rooms} />
          <PrivateRoute path="/users" component={UsersList} />

          {/* Public routes */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/policy" component={Policy} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </SessionContext.Provider>
    </Router>
  );
};

export default App;
