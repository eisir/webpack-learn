import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Button extends Component {
  handleClick(){
    alert('点击了');
  }
  render(){
    const style = require('./Button.less');
    
    return (
    	<div className="text-center">
	      <button className="my-button" onClick={this.handleClick.bind(this)}>
	        快戳我
	      </button>
	      <div clasName="tip"></div>
	      <span className="glyphicon glyphicon-asterisk"></span>
	    </div>
    );
  }
}
export default Button;