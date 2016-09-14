import React from 'react';
import TodosList from './TodosList';

let Todos = React.createClass({
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
				<TodosList items={this.state.items}
        removeItem={this.removeItem} />
			</div>
			)
	}
}); //Todos

export default Todos;