import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/tailwind.css';
import './styles/app.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/output.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
