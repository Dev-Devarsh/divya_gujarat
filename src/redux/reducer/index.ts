import auth from './auth';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../services/auth_api';
import { newsApi } from '../services/fetch_new_api';
// import { authApi } from '../services/a';
const rootReducer = combineReducers({
	auth,
	[authApi.reducerPath]: authApi.reducer,
	[newsApi.reducerPath]: newsApi.reducer
});

export default rootReducer;
