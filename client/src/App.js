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

    </BrowserRouter>
  );
}

export default App;
