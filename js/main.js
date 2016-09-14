import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink, browserHistory} from 'react-router';

import NavLink from './components/NavLinks';
import Home from './components/Home';
import About from './components/About';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Todos from './components/Todos';


var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

let App = React.createClass({
  render: function(){

    return(
      <div>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/todos">Todos</NavLink></li>
        </ul>
        <hr />
        {this.props.children}
      </div>)
  }
});



  ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App} >

      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} >
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/todos" component={Todos} />
    </Route>
  </Router>

  , document.getElementById('root')
  );
