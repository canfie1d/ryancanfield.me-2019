import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';

export default combineReducers({
  browser: createResponsiveStateReducer({
    extraSmall: 479,
    mediumSmall: 639,
    small: 767,
    medium: 1023,
    large: 1279,
    extraLarge: 1399,
  }),
});
