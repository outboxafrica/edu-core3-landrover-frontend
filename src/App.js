import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./components/Home";
import About from "./components/About"
import Profile from './components/Profile';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route path="/auth/login" > <Login /> </Route>
          {/* <Route path="/auth/signup" > <Signup /> </Route> */}
          <Route path="/about"> <About /></Route>
          {/* <Route path="/questions"> <PostList /></Route> */}
          <ProtectedRoute path="/user/:id/profile" component = {Profile} /> 
          <Route path="*"> <NoMatch /></Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
