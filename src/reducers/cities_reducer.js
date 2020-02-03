const citiesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }
  if (action.type === 'SET_CITY') {
    return action.payload;
  } else {
    return state;
  }
};

export default citiesReducer;
