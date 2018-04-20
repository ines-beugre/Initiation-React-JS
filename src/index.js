import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Wine } from './Wine';
const wine = { name: 'Château Chevrol Bel Air'};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
