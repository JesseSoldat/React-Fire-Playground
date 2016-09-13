import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {Router, Route, hashHistory} from 'react-router';

import About from './components/About';
import Repos from './components/Repos';
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
      <div>App</div>)
  }
});



  ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/repos" component={Repos} />
    <Route path="/todos" component={Todos} />
  </Router>

  , document.getElementById('root')
  );
