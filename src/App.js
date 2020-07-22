import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Deliveries from './pages/Deliveries';
import Logout from './pages/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/deliveries" component={Deliveries} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
