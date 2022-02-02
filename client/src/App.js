import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Nav from './views/Nav';
import RecipeForm from './components/RecipeForm';
import ViewAllRecipes from "./views/ViewAllRecipes";


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

      <Route exact path="/recipes/viewall">
        <h1>view all page</h1>
        <ViewAllRecipes/>
      </Route>

      <Route exact path="/recipes/:_id">
      <h1>View one recipe here</h1>
      </Route>

    </BrowserRouter>
  );
}

export default App;
