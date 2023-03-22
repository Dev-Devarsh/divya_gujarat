import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from '../../../redux/reducer/news_slice'
import { fetchProducts } from '../../../redux/services/fetch_news'
import './newsCard.css'
import Loader from '../../spinner/spinner';


const News = () => {
    const dispatch = useDispatch();
    const { data: news, status } = useSelector((state) => state.newsData);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log(news, "news.articles")


    if (status === STATUS.LOADING) {
        return <div className="loader"> <Loader /> </div>
    }
    if (status === STATUS.ERROR) {
        return <center> Error </center>
    }
    if (news.articles == undefined) {
        return <div className="loader"> <Loader /> </div>
    }
    else {
        return (
            <center>
                <div className="news-container">
                    {
                        news.articles.map((e, index) => {
                            return (<div className='news-wrapper'>
                                <div className="card">
                                    <img className="img" src={'e?.urlToImage'} alt="https://image-cdn.essentiallysports.com/wp-content/uploads/mrbeast-1-23-560x315.jpg"></img>
                                    <div className="title"> {e?.title} </div>
                                    <div className="description"> {e?.content} </div>
                                    <div className="source-writter">
                                        <div style={{ fontWeight: 700, fontSize: 15 }}> Source :     </div>
                                        <div style={{ fontWeight: 300, fontSize: 15 }}> {e?.author} </div>
                                    </div>
                                </div>

                            </div>)
                        })
                    }
                </div>

            </center>
        )
    }

}

export default News;