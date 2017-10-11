import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';

import { Provider } from 'react-redux';
import store from './reducers';

import 'assets/stylus/main.styl';
import '../node_modules/font-awesome/css/font-awesome.css';
import 'manifest.json';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-unused-vars,react/no-deprecated
  let createClass = React.createClass;
  Object.defineProperty(React, 'createClass', {
    set: (nextCreateClass) => {
      createClass = nextCreateClass;
    },
  });
  // eslint-disable-next-line global-require
  // const { whyDidYouUpdate } = require('why-did-you-update');
  // whyDidYouUpdate(React);
}
const renderHot = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

const AppComponent = () => (
  <Provider key={module.hot ? Date.now() : store} store={store}>
    <App />
  </Provider>
);

render(
  <AppComponent />,
  document.getElementById('app')
);

if(module.hot){
  module.hot.accept('./components/App', () => renderHot(AppComponent));
}
