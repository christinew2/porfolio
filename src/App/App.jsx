import React from 'react';
import './App.css';

// Components
import NavBar from '../components/NavBar/NavBar';
import { Switch, Route } from 'react-router';

// Pages
import Landing from '../pages/Landing/Landing'
import About from '../pages/About/About'
import Work from '../pages/Work/Work'

const App = () => {

  return (
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/work">
          <Work />
        </Route>

        <Route path="/about">
          <About />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
