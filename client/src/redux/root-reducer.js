import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from '../redux/reducers/userReducer';
import cartReducer from '../redux/reducers/cartReducer';
import directoryReducer from '../redux/directory/directoryReducer';
import shopReducer from '../redux/shop/shopReducer';

const persistConfig = {
     key: 'root',
     storage,
     whitelist: ['cart']
};

const rootReducer = combineReducers({
     user: userReducer,
     cart: cartReducer,
     directory: directoryReducer,
     shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)

// ^ this now returns a modified version of our root reducer with the persistConfig capabilities thanks to persistReducer fuxn


// export default combineReducers({
//      user: userReducer,
//      cart: cartReducer
// });