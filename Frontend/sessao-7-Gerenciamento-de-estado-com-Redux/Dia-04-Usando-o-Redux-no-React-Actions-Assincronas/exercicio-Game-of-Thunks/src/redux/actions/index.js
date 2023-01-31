import { fetchGame_Api } from '../../services/api_game';
export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';


export const searchBegin = () => (
  { type: SEARCH_BEGIN }
);

export const searchSuccess = (payload) => ({ 
  type: SEARCH_SUCCESS, 
  payload 
});

export const searchFailure = (error) => ({ 
  type: SEARCH_ERROR, 
  error });

// export const apiReturn = (payload) => ({
//   type: CHARACTER_NAME,
//   payload,
// });

// export apiError = 

export const fetchCharacter = (name) => {
  return async (dispatch) => {
    try {
      dispatch(searchBegin())
      const API = await fetchGame_Api(name);
      dispatch(searchSuccess(API));
    } catch (error) {
      dispatch(searchFailure(error));
    }
    };
};
