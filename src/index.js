import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

import registerServiceWorker from './registerServiceWorker';
import Routes from "./app/routes";


ReactDOM.render(<Routes />,
    document.getElementById('root'));
registerServiceWorker();
