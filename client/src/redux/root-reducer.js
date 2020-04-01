import { combineReducers } from 'redux';

import userReducer from '../redux/reducers/userReducer';
import cartReducer from '../redux/reducers/cartReducer';

export default combineReducers({
     user: userReducer,
     cart: cartReducer
});