// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
import './newsCard.css'
// import Loader from '../../spinner/spinner';
import { useNewsDataQuery } from '../../../redux/services/fetch_new_api'
import Loading from '../../loader/loader';
import Col from 'antd/es/grid/col';


const News = (props: { isMobile: boolean, width: number }) => {
    const { data: news, isLoading } = useNewsDataQuery('');

    return (
        isLoading ?
            <Loading />
            :
            <div className='content-main'>
                {
                    props.isMobile ?
                        <></>
                        :

                        <div className='ad-column'>
                            <div className="left-ad">Left Ad</div>
                            <div className="left-ad">Left Ad</div>
                            <div className="left-ad">Left Ad</div>
                        </div>
                }
                <div className={props.isMobile ? 'news-wrapper-mobile' : props.width <= 910 ? "news-wrapper-small-desktop" : 'news-wrapper-desktop'}>
                    {
                        news?.articles.map((e: { urlToImage: string | undefined; title: string | null | undefined; content: string | null | undefined; author: string | null | undefined; }) => {
                            const altImage = "https://image-cdn.essentiallysports.com/wp-content/uploads/mrbeast-1-23-560x315.jpg";
                            return (
                                <div className="card">
                                    <img className="img" src={e?.urlToImage} alt={altImage} />
                                    <div className="title"> {e?.title} </div>
                                    <div className="description"> {e?.content} </div>
                                    <div className="source-writter">
                                        <div style={{ fontWeight: 700, fontSize: 15 }}> Source :</div>
                                        <div style={{ fontWeight: 300, fontSize: 15 }}> {e?.author} </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                {
                    props.isMobile
                        ?
                        <></>
                        :
                        <div className='ad-column'>
                            <div className="right-ad">Right Ad</div>
                            <div className="right-ad">Right Ad</div>
                            <div className="right-ad">Right Ad</div>

                        </div>
                }



            </div>


    )

}

export default News;




const newas = {
    "articles": [
        {
            "urlToImage": "",
            "title": "wefwef",
            "content": "wefwefwef",
            "author": "wefwef",
        },
        {
            "urlToImage": "",
            "title": "wefwef",
            "content": "wfewf",
            "author": "wfsfsf",
        },
        {
            "urlToImage": "",
            "title": "dbrdhfh",
            "content": "sergdfgvsr",
            "author": "gaergttrsh",
        },
        {
            "urlToImage": "",
            "title": "gtrghtgdfd",
            "content": "ersgsergdv",
            "author": "thdrtxdb",
        },
        {
            "urlToImage": "",
            "title": "dthdtbd",
            "content": "egdgbdgd",
            "author": "rtgerhrthrh",
        },
        {
            "urlToImage": "",
            "title": "wefwef",
            "content": "wefwefwef",
            "author": "wefwef",
        },
        {
            "urlToImage": "",
            "title": "wefwef",
            "content": "wfewf",
            "author": "wfsfsf",
        },
        {
            "urlToImage": "",
            "title": "dbrdhfh",
            "content": "sergdfgvsr",
            "author": "gaergttrsh",
        },
        {
            "urlToImage": "",
            "title": "gtrghtgdfd",
            "content": "ersgsergdv",
            "author": "thdrtxdb",
        },
        {
            "urlToImage": "",
            "title": "dthdtbd",
            "content": "egdgbdgd",
            "author": "rtgerhrthrh",
        },

    ]


}