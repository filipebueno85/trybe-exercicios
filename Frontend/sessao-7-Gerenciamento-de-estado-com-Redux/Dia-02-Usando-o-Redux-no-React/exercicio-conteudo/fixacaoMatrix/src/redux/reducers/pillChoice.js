const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PILULA_MATRIX':
      return {
        ...state,
        id: action.id,
      };
    // return { id: action.id };
    default:
      return state;
  }
};

export default selectedPill;
