import { configureStore } from "@reduxjs/toolkit";

import NewsReducer from  "../reducer/news_slice"

const store = configureStore({
    reducer : {
        newsData : NewsReducer, // imported from cart_slice
    }
})

export default store;