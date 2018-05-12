import { CHANGE_LANG } from '../actions';

const initialState = {
  siteBase: null,
  currentLang: 'ru'
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG: {
      state.currentLang = action.data;
      return {...state};
      break;
    }
  }

  return state;
}
