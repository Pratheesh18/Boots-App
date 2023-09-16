import {combineReducers} from 'redux';
import cartReducer from './CartReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
    cart : cartReducer,
});

const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(thunk),
    
})

export default store;