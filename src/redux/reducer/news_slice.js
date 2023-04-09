import { createSlice } from "@reduxjs/toolkit";

// TO make any object [immutable] use [Object.freeze()]
export const STATUS = Object.freeze({
    IDLE: 'ideal',
    ERROR: 'error',
    LOADING: 'loading'
});

const newsSlice = createSlice({
    name: 'newsData',
    initialState: {
        'data': {}, // difine the type you response will have here we have {Map} so i assigned  
        'status': STATUS.IDLE
    },
    // reducers are function (pure function) with the help of the reducer we mutate or change state
    // pure functions are function which don't change anything outSide of the function
    // reducers are sync function so we can't perform async opration in it
    reducers: {
        setNews(state, action) {
            // we add a payload [item] in state [reducers] which is an array
            state.data = action.payload;
            // in state you will get access those variables as defined in the initialState
            // here we have defined the [data] and [state]
        },
        setStatus(state, action) {
            state.status = action.payload
        }

    }
})


export const { setNews, setStatus } = newsSlice.actions;
export default newsSlice.reducer;
