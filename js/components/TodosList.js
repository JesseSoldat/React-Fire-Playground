import React from 'react';

let TodosList = React.createClass({
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
}); //TodosList

export default TodosList;