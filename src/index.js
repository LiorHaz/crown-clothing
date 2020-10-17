import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor = {persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


