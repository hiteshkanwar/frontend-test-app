import React, { Component } from 'react';
import { appStyle } from '../../style'
export default class index extends Component{
	render(){
		return(
		<div style={appStyle.vHcenter}>
			<span style={appStyle.invalidText}>Invalid path</span><br/>
			<span><a href="" onClick={()=>this.props.history.push('/')} >Go To Home</a></span>
		</div>
		)
	}
}