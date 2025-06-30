import React from 'react'

const NewsItem = (props) => {

        let { title, summary, imgUrl, url } = props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl} className="card-img-top" alt="..." style={{"backgroundSize": "cover", "height": "10rem"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{"overflow": "hidden","text-overflow": "ellipsis", "white-space": "nowrap"}}>{summary}</p>
                        <a href={url} className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem