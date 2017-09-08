import React, { Component } from 'react';
import style from './style.css';
import {Route, Link} from 'react-router';
import Next from '../Next';


class Form extends Component {
constructor(props) {
    super(props);
    this.state = {
		array: [],
		todo:{
			id: '',
			title:'',
		},
		userName: '',
		email: '',
		comment: ''
	};
	this.AddTodo = this.AddTodo.bind(this);
	this.changeUserName = this.changeUserName.bind(this);
	this.changeEmail = this.changeEmail.bind(this);
	this.changeComment = this.changeComment.bind(this);
}
changeUserName (e) {
	this.setState({
	  userName: e.target.value,
	  todo: {
		id: e.target.value
	  }
	})
}
changeEmail (e) {
	this.setState({
	  email: e.target.value
	})
}
changeComment (e) {
	this.setState({
	  comment: e.target.value
	})
}
AddTodo () {
	/*
	this.setState({
	  todo: {
		id: userName,
		title: company
	  }
	})
	console.log(this.state.company)
	this.state.array.push(this.state.todo)
	this.setState({
	  todo: {
		id: '',
		title: ''
	  },
	  userName: '',
	  company: ''
	})
	*/
	console.log(this.state.array)
}
render(){
	return (
	<div id="background">
		<div className="container">
			<div id="box">
				<section className="col-6">
						<h3>CONTACT</h3>
						<div className="form-group">
							<div>
								<input onChange={this.changeUserName} value={this.state.userName} id="textinput" name="名字欄位" type="text" placeholder="Name" className="form-control input-md"/>
							</div>
						</div>
						<div className="form-group">
							<div >
								 <input onChange={this.changeEmail} value={this.state.email}  id="textinput" name="Email" type="email" placeholder="Email" className="form-control input-md"/>
							</div>
						</div>
						<div className="form-group">
						  <textarea onChange={this.changeComment} value={this.state.comment} className="form-control" rows="5" id="comment" placeholder="Comment"></textarea>
						</div>
						<div className="form-group">
							  <label className="control-label" htmlFor="singlebutton"></label>
							  <div>
								<Link to={{ pathname: '/Next', query: { pa1: this.state.userName, pa2: this.state.email , pa3: this.state.comment } }}>
								    <input type="submit"  onClick={this.AddTodo} id="singlebutton" name="singlebutton" className="btn btn-primary" placeholder="send" />
								</Link>
							  </div>
						</div>
				</section>
				<section className="col-6">
						<h3>
							JOSIES
						</h3>
						<p>
							Naxxar Road Lija, Malta
						</p>
						<p>
							<b>T</b>
							(+356) 2141 0685
						</p>
						<p>
							<b>T</b>
							(+356) 2143 8242
						</p>
						<p>
							<b>F</b>
							(+356) 2143 7432
						</p>
				</section>
				{/*<div>  //displays inputs at the same time
					<hr/>
					<h4>{this.state.userName}</h4>
					<h4>{this.state.company}</h4>
				</div>*/}
			</div>
		</div>
	</div>
);
}
}
export default Form;
