import React from 'react';
import './App.css';

import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotMatched from './Component/NotMatched/NotMatched';
import PostDetail from './Component/PostDetail/PostDetail';
import Header from './Component/Header/Header';

// import { Router } from 'react-router-dom';
function App() {
  
  return (
    <div>
      
      <Header></Header>
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatched />
          </Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
