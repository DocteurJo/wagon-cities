// TODO: add and export your own actions

import cities from '../cities';


const setCities = () => {
  return {
    type: 'SET_CITY',
    payload: cities
  };
};

export default setCities;
