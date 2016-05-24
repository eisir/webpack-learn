'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button/Button';

let root = document.getElementById('app');
class Txt extends Component{
	render(){
		return (			
			<div><ul>
				<li><Button /></li>
				<li>b</li>
				<li>c</li>
				<li>d</li>
			</ul></div>
		)
	}
}
ReactDOM.render( <Txt />, root );