import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoPage from "./modules/Todo/TodoPage";
import TodoClass from "./modules/Todo/TodoClass";
import LoginPage from "./modules/Auth/Login"
import Home from "./modules/Home"
import MoviesPage from "./modules/Movies/MoviesPage";
import MovieDetail from "./modules/Movies/MovieDetail";
import HeroesPage from "./modules/Heroes/HeroesPage";

function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/heroes">
            <HeroesPage />
          </Route>

          <Route exact path="/todo-function">
            <TodoPage />
          </Route>

          <Route exact path="/todo-class">
            <TodoClass />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route exact path="/movies/detail">
            <MovieDetail />
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
