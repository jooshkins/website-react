import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './registerServiceWorker';
import App from './App';
import './style.css';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();