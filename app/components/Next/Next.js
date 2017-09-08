import React, { Component } from 'react';
import style from './style.css';


class Next extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			ap: ''
	    }
	}

render(){
	return (
		<div id="Next">
			<div className="container">
				<div id="Nextbox">
					<form action="http://www.enformed.io/nt63hz5o" method="POST" >
						<section>
							<h3> Thank you and we will get back to you soon</h3>
							<input  name="名字" value={this.props.location.query.pa1}  /><br/>
							<input  name="Email" value={this.props.location.query.pa2}  /><br/>
							<textarea  name="comment" rows="4" cols="70" value={this.props.location.query.pa3} ></textarea><br/>
							<input type="hidden" name="*redirect" value="https://react-form.firebaseapp.com/" />
							<button   className="btn btn-primary" id="singlebutton">BACK TO THE SITE</button>
						</section>
					</form>
				</div>
			</div>
		</div>
	)
}
}
export default Next;
