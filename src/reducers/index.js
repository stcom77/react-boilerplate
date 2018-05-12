import { createStore, combineReducers } from 'redux';

import main from './mainReducer';

export const reducers = combineReducers({
  main
});

function configureStore() {
  let store;
  if (typeof window === 'undefined') {
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
