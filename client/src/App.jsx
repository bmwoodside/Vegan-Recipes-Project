import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';


function App() {
  return (
    <BrowserRouter>
      
      <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/recipes/create">
      <h1>View all recipes here</h1>
      </Route>

      <Route exact path="/recipes/:_id">
      <h1>View one recipe here</h1>
      </Route>

    </BrowserRouter>
  );
}

export default App;
