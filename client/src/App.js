import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Nav from './views/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Route exact path="/">
        <Main />
      </Route>

    </BrowserRouter>
  );
}

export default App;
