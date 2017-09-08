import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Todob from './components/Todob';
// import AboutUs from './components/About';
import Form from './components/Form';
import Next from './components/Next';

import { browserHistory, Router, Route } from 'react-router'



class App extends React.Component {
  render() {
    return (
		<Router history={browserHistory}>
		   <Route path='/' component={Form} />
		   <Route path='/Next' component={Next} />
	   </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
