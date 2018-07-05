import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
