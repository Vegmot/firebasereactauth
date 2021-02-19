import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/home/HomeScreen';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Container>
            <main>
              <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </main>
          </Container>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
