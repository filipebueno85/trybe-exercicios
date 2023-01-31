import { SEARCH_BEGIN, SEARCH_ERROR, SEARCH_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  character: '',
  // title: '',
  // nickName: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.payload[0],
      }
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
    return state
  }
};

export default reducer;