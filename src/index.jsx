import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle";
import Iphone5size from "./styles/phone-sizes/Iphone5size";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<Iphone5size />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
