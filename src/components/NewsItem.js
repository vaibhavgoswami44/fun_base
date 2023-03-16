import React from 'react'

const NewsItem=(props)=>{
        let { title, img, des, button, bgColor, textColor, sourceName, author, publishedAt } = props
        return (
            <>
                <div className="card m-3" style={{ backgroundColor: `${bgColor}`, color: `${textColor}`, boxShadow: bgColor === 'white' ? '1px 1px 10px 1px black' : '1px 1px 10px 1px white' }} >
                    <div style={{ position: 'absolute', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <span className="badge rounded-pill bg-danger">
                            {sourceName}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{des}</p>
                        <a rel="noreferrer" target='_blank' href={button} className="btn btn-primary">Read More</a>
                        <p className="card-text mt-2"><small className="text-muted">By {author} At {Date(publishedAt)}</small></p>
                    </div>
                </div>
            </>
        )
    }
export default NewsItem
