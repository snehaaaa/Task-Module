// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';

import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './app/ducks/reducers/combinedReducer';


const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// serviceWorker.unregister();
