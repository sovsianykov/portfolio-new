import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
  <Router>
      <NavBar/>
   <Switch>
     <Route path='/' component={ Home } exact />
     <Route path='/about' component={ About} />
     <Route path='/post/:slug' component={ SinglePost  } />
     <Route path='/post' component={ Post } />
     <Route path='/project' component= { Project } />
   </Switch>
  </Router>
  );
}

export default App;
