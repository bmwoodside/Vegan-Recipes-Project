import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Nav from './views/Nav';
import RecipeForm from './components/RecipeForm';
import ViewAllRecipes from "./views/ViewAllRecipes";
import ViewOne from "./views/ViewOne";
import AboutUs from './views/AboutUs';
import EditForm from './components/EditForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/recipes/create">
          <RecipeForm />
        </Route>

        <Route exact path="/recipes/viewall">
          <ViewAllRecipes />
        </Route>

        <Route exact path="/recipes/:_id">
          <ViewOne />
        </Route>

        <Route exact path="/recipes/:_id/edit">
          <EditForm />
        </Route>
    
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>

      </Switch>


    </BrowserRouter>
  );
}

export default App;
