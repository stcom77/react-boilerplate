import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect, assert } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { Provider } from 'react-redux';
import { getEmptyStore } from '../src/reducers';

['.css', '.scss', '.styl', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// global.navigator = global.window.navigator;
global.navigator = {
  userAgent: 'node.js'
};
global.window.localStorage = mockStorage();
global.window.sessionStorage = mockStorage();

chai.use(chaiEnzyme());

const warn = console.error; // eslint-disable-line no-console
console.error = function (warning) { // eslint-disable-line no-console
  if (/(Invalid prop|Failed prop type)/.test(warning)) {
    throw new Error(warning);
  }
  warn.apply(console, arguments);
};

function mockStorage() {
  const storage = {};

  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return storage[key];
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={getEmptyStore()}>
      <ComponentClass {...props} />
    </Provider>
  );

  return ReactDOM.findDOMNode(componentInstance);
}

function renderWithStore(ComponentClass, props = {}, state = {}) {
  return (
    <Provider store={getEmptyStore()}>
      <ComponentClass {...props} />
    </Provider>
  );
}

export { renderComponent, expect, mockStorage, assert, renderWithStore };
