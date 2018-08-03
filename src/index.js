// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Components
import App from './components/App';

// Styles
import './index.css';
import 'antd/dist/antd.css';

// Store
const store = createStore(reducer);

// Render the app..
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);