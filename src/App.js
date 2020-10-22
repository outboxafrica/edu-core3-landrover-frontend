import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./components/Home";
import About from "./components/About"
import Profile from './components/Profile';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route path="/auth/login" > <Login /> </Route>
          <Route path="/auth/signup" > <Signup /> </Route>
          <ProtectedRoute path='/User/:id/profile' component={Profile} />
          <Route path="/about"> <About /></Route>
          <Route path="/search?"> <SearchBar /></Route>
          <Route path="/questions/ask"> <PostForm /></Route>
          <Route path="*"> <NoMatch /></Route>
        </Switch>
      </React.Fragment>
     
    </div>
  );
}

export default App;
