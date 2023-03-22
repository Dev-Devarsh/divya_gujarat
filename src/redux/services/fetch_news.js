import { setNews, setStatus } from '../reducer/news_slice'
import axios from 'axios';
import { STATUS } from '../../redux/reducer/news_slice'
import React from 'react';

// Thunks

// Thunk is a function which returns a new function

export function fetchProducts() {
    return async function fetchProductsThunks(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=bdd208e2d66040ea8cb4be83ccbc90d7',
                {
                    method: 'GET',
                }
            );
            const data = await res.json();
            dispatch(setNews(data));
            for (let index = 0; index < data.articles.length; index++) {
                console.log(`obj ${data.articles[index].title}`);
            }
            dispatch(setStatus(STATUS.IDLE))

        } catch (error) {
            console.log(`error is ${error}`);
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}
