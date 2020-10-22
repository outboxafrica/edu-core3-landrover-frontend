import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PostList from './components/PostList';

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
          <Route path="/questions"> <PostList /></Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
