// TODO: add and export your own actions

import cities from '../cities';


function setCities() {
  return {
    type: 'SET_CITY',
    payload: cities
  };
}

function setActiveCity(city) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city,
  };
}

export { setCities, setActiveCity };
