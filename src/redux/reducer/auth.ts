import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogin: null,
	loading: false,
	isSuccess: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setLoading(state: any, action) {
			state.loading = action.payload;
		},
		logout: (state: any) => {
			state.isLogin = null;
			state.loading = null;
	
		},
		login: (state: any, action) => {
			const { token, user, company } = action.payload;
			state.user = user;
			state.company = company;
			state.token = token;
			state.isLogin = true;
		},
		adminSignup: (state: any, action) => {
			const { token, result } = action.payload;
			state.isLogin = true;
			state.company = result;
			state.token = token;
			state.user = null;
			state.isSignUp = true;
	},
		adminLogin: (state: any, action) => {
			const { token, result } = action.payload;
			state.isLogin = true;
			state.company = result;
			state.token = token;
			state.user = null;
			state.isSignUp = true;
		},
	},
});

export const { setLoading, logout, login, adminSignup, adminLogin } = authSlice.actions;
export default authSlice.reducer;
