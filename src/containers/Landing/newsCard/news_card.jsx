import React, { useEffect,useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
import { STATUS } from '../../../redux/reducer/news_slice'
// import { fetchProducts } from '../../../redux/services/fetch_news'
import './newsCard.css'
import Loader from '../../spinner/spinner';


const News = () => {
    const [newsStatus,setNewsStatus] = useState(STATUS.LOADING);
    const [news,setNews] = useState({});
    
    // const dispatch = useDispatch();
    // const { data: news,status: newStatus } = useSelector((state) => state.newsData);
    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])

    // don't use async in useEffect [ex: useEffect(async() => {} ]
    // insted of this write async  function in useEffect
    useEffect(() => {
        const fetchNews = async () => {
            const res = await fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=bdd208e2d66040ea8cb4be83ccbc90d7');
            const data = await res.json();
            setNewsStatus(STATUS.IDLE)
            setNews(data)
          }
          fetchNews()
    }, [])


    if (newsStatus === STATUS.LOADING) {
        return <div className="loader"> <Loader /> </div>
    }
    if (newsStatus === STATUS.ERROR) {
        return <center> Error </center>
    }
    else {
        return (
            <center>
                <div className="news-container">
                    {
                        news.articles.map((e) => {
                            return (<div className='news-wrapper'>
                                <div className="card">
                                    <img className="img" src={e?.urlToImage} alt="https://image-cdn.essentiallysports.com/wp-content/uploads/mrbeast-1-23-560x315.jpg" />
                                    <div className="title"> {e?.title} </div>
                                    <div className="description"> {e?.content} </div>
                                    <div className="source-writter">
                                        <div style={{ fontWeight: 700, fontSize: 15 }}> Source :    </div>
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