import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from "./components/header";
import Search from "./components/search";
import Saved from "./components/saved";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row navigation navbar navbar-light bg-light">
          <div className=" col-12 navigation-sub">
            <Link to="/" className="item navbar-brand">Search</Link>
            <Link to="/saved" className="item navbar-brand">Saved</Link>
          </div>
        </div>
        <Header />

        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}


export default App;
