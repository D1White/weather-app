import { combineReducers } from 'redux';

import weatherReducer from './weather';
import locationReducer from './location';
import unitsReducer from './units';

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  units: unitsReducer,
});

export default rootReducer;