import React, { Component } from 'react';
import { Route, Router  } from "react-router-dom";
import './App.css';
import ToDo from "./module";

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
       <Router history={history}>
				<div>
					<Route exact  path="/"   render={history => <ToDo location={history} />}/>
				</div>
			</Router>
      </div>
    );
  }
}

export default App;
