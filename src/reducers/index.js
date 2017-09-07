import { createStore, combineReducers } from 'redux';

import example from './exampleReducer';

export const reducers = combineReducers({
  example
});

function configureStore() {
  let store;
  if (typeof window === 'undefined') {
    //for tests
    store = createStore(
      reducers
    );
  } else {
    store = createStore(
      reducers,
      undefined,
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
  }
  return store;
}

const store = configureStore();
export default store;

export { configureStore };

// useful for tests
export function getEmptyStore() {
  return configureStore();
}
