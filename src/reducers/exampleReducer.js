import { TEST__SUCCESS } from '../actions/testActions';

const initialState = {
  siteBase: null
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
  case TEST__SUCCESS: {
    break;
  }
  }

  return state;
}
