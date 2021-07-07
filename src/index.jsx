import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle";
import PhoneSizes from "./styles/phoneSizes";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<PhoneSizes />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
