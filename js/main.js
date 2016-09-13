import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  let TodoList = React.createClass({
  	render: function(){
  		let _this = this;
  		let createItem = function(item, index){
  			return (
  			<li key={index}>
  				{item.text}
          <span
            onClick={_this.props.removeItem.bind(null, item['.key'])}
            style={{color:'red', marginLeft:'10px', cursor:'pointer'}}>X</span>
  			</li>
  			);
  		} //createItem
  		return <ul>{this.props.items.map(createItem)}</ul>;	
  	}//render
  }); //TodoList

  let App = React.createClass({
  	mixins: [ReactFireMixin],

  	getInitialState: function(){
  		return {
  			items: [],
  			text: ''
  		}
  	},

  componentWillMount: function() {
    var firebaseRef = firebase.database().ref('jlist/items');
    this.bindAsArray(firebaseRef, 'items');
  },


    handleSubmit: function(e){
      e.preventDefault();
      if(this.state.text && this.state.text.trim().length !== 0) {
        
        this.firebaseRefs['items'].push({
          text: this.state.text
        });
        this.setState({
          text: ''
        });
      }
    },

  	onChange: function(e){
  		// console.log(e.target.value);
  		this.setState({text: e.target.value});
  	},

    removeItem: function(key){
      // console.log(key);
      let firebaseRef = firebase.database().ref('jlist/items');
      firebaseRef.child(key).remove();
    },

  	render: function(){
  		return(<div>
  				<form onSubmit={this.handleSubmit}>
  					<input 
  					onChange={this.onChange}
  					value={this.state.text} />

  					<button>{'Add #' +(this.state.items.length + 1)}</button>
  				</form>
  				<TodoList items={this.state.items}
          removeItem={this.removeItem} />
  			</div>
  			)
  	}
  }); //App


  ReactDOM.render(<App />, document.getElementById('root')
  );
