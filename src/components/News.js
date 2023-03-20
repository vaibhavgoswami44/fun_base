import { useState, React, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'
import InfiniteScroll from 'react-infinite-scroll-component'
import '../App.css';
import LoadingBar from 'react-top-loading-bar'

const News = (props) => {


    const [page, setPage] = useState(1)
    const country = 'in'
    // const [language, setLanguage] = useState('en')
    const [articles, setArticles] = useState([])
    const [load, setLoad] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [progress, setProgress] = useState(0)
    const category = props.category
    const search = props.search


    useEffect(() => {
        updateNews()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const updateNews = async () => {
        if (search) {

            setProgress(10)
            setLoad(true)
            let url = `https://newsapi.org/v2/everything?q=${props.searchText}&sortBy=relevancy&language=en&apiKey=${props.API_KEY}&page=1&pageSize=20`
            setProgress(20)
            let data1 = await fetch(url)
            setProgress(50)
            let data = await data1.json()
            setProgress(90)
            setArticles(data.articles)
            setLoad(false)
            setProgress(100)
            setTotalResults(data.totalResults <= 100 ? data.totalResults : 100)
            document.title = `Search - News`
        }
        else {
            setProgress(10)
            setLoad(true)
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${props.API_KEY}&category=${category}&page=1&pagesize=20`
            setProgress(20)
            let data1 = await fetch(url)
            setProgress(50)
            let data = await data1.json()
            setProgress(90)
            setArticles(data.articles)
            setLoad(false)
            setProgress(100)
            setTotalResults(data.totalResults <= 100 ? data.totalResults : 100)
            document.title = `${upperFun(category)} - News`
        }
    }
    const fetchData = async () => {
        if (search) {
            let url = `https://newsapi.org/v2/everything?q=${props.searchText}&sortBy=relevancy&language=en&apiKey=${props.API_KEY}&page=${page + 1}&pageSize=20`
            let data1 = await fetch(url)
            let data = await data1.json()
            setArticles(articles.concat(data.articles))
            setPage(page + 1)
        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${props.API_KEY}&category=${category}&page=${page + 1}&pagesize=20`
            let data1 = await fetch(url)
            let data = await data1.json()
            setArticles(articles.concat(data.articles))
            setPage(page + 1)
        }

    }




    const upperFun = (str) => {
        let a = str
        let a1 = a.split('')
        let b = a.slice(1)
        let d = a1[0].toUpperCase()
        let str2 = d + b
        return str2
    }
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
            />
            <div className='container'>
                <h1 className='my-3'> {search ? 'From Your Search' : `Top ${upperFun(category)} Headlines`}</h1>
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length !== totalResults}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>End of Page</b>
                    </p>
                }
            >
                {load ? <Spinners /> :
                    <div className='container '>
                        <div className='d-flex justify-content-around flex-row flex-wrap' >
                            {articles.map((ele) => {
                                return <div style={{ width: '400px' }} key={ele.url} >
                                    <NewsItem author={ele.author ? ele.author : "Unknown"} publishedAt={ele.publishedAt ? ele.publishedAt : "Unknown"} sourceName={ele.source.name ? ele.source.name : "Unknown"}  title={ele.title ? ele.title : "Unknown"} img={ele.urlToImage ? ele.urlToImage : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="} des={ele.description ? ele.description : "Unknown"} button={ele.url ? ele.url : "Unknown"} />
                                </div>
                            })}
                        </div>
                    </div>
                }
            </InfiniteScroll>
        </>
    )
}
export default News