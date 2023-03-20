import React from 'react'
import { useSelector } from 'react-redux'

const NewsItem = (props) => {
    const { bgColor, textColor } = useSelector((state) => state.reducer.value)
    let { title, img, des, button, sourceName, author, publishedAt } = props
    return (
        <>
            <div className="card m-3" style={{ backgroundColor: `${bgColor}`, color: `${textColor}`, boxShadow: bgColor === 'white' ? '1px 1px 10px 1px black' : '1px 1px 10px 1px white' }} >
                <div style={{ position: 'absolute', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <span className="badge rounded-pill bg-danger">
                        {sourceName}
                    </span>
                </div>
                <a rel="noreferrer" target='_blank' href={button} >  <img src={img} className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <a rel="noreferrer" target='_blank' href={button} style={{ textDecoration: 'none', color: `${textColor}` }} >  <h5 className="card-title" >{title}</h5></a>
                    <a rel="noreferrer" target='_blank' href={button} style={{ textDecoration: 'none', color: `${textColor}` }} >  <p className="card-text"  >{des}</p></a>
                    <p className="card-text mt-2 mb-0"><small className="text-muted">Author: {author}</small></p>
                    <p className="card-text"><small className="text-muted">PublishedAt : {publishedAt.slice(0, 10)}</small></p>
                    <a rel="noreferrer" target='_blank' href={button} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}
export default NewsItem
