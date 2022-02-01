import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Nav from './views/Nav';
import RecipeForm from './components/RecipeForm';


function App() {
  return (
    <BrowserRouter>
    <Nav />
      
      <Route exact path="/">
        <Main />
      </Route>

      <Route exact path="/recipes/create">
        <RecipeForm />
      </Route>

    </BrowserRouter>
  );
}

export default App;
