import React from 'react';
import './App.css';

// Components + Pages
import NavBar from '../components/NavBar/NavBar';
import { Switch, Route } from 'react-router';

const App = () => {

  return (
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route exact path="/">
          <h1>Landing</h1>
        </Route>

        <Route path="/work">
          <h1>Work</h1>
        </Route>

        <Route path="/about">
          <h1>About</h1>
        </Route>
        
      </Switch>

    </div>
  );
}

export default App;
