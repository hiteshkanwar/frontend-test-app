import React, {Component} from 'react'
import axios from 'axios';
import { appConstants } from '../constants';
import { appStyle } from '../../style'

export default class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: []
		}
	}

	fetchDataFromExcel = async() => {
		var res = {}

		// call remote api by axios
		// use await here, flow will not go down till response not get from server

		await axios.get(`${appConstants.WEB_SERVICE_URL}/tasks`)
	    .then(function (response) {
	      if(response.status == 200){
	      	 res = response.data.data
	      }
	    })
	  .catch(error => { 
	    alert(error)
	   });

	  if( res.length > 0 ){
	  	this.setState({list: res})
	  }
	} 

	render(){
		return(
			<div>
				<div style={appStyle.container}>
					<h4>Test Task - Read data from excel sheet </h4>
					<div style = {{marginTop: 50}}>
						<button onClick={()=>{this.fetchDataFromExcel()}} type="button" class="btn btn-outline-primary">Fetch Value</button>
					</div>
					{
						this.state.list.length > 0 ?
							<div>
								<div  style={{marginTop: 30}}>
									Fetched data from EXCEL - 
								</div>
								<div style={{marginTop: 30}}>
									<table class="table table-hover">
									  <thead class="thead-dark">
									    <tr>
									      <th scope="col">#</th>
									      <th scope="col">First Name</th>
									      <th scope="col">Last Name</th>
									      <th scope="col">Age</th>
									      <th scope="col">Sex</th>
									    </tr>
									  </thead>
									  <tbody>
									  {
									  		this.state.list.map((data, index)=>{
									  			debugger
									  			return(
									  				<tr>
												      <th scope="row">{ index + 1 }</th>
												      <td>{data[0]}</td>
												      <td>{data[1]}</td>
												      <td>{data[2]}</td>
												      <td>{data[3]}</td>
												    </tr>
									  			)
									  		})
									  }
									  </tbody>
									</table>
								</div>
							</div>
							:
							<div style={{ marginTop: 30 }}>
								No Data Available. Click on Fetch button to get value
							</div>
						}
				</div>
			</div>
		)
	}
}