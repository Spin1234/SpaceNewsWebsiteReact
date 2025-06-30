import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NewsItem from './NewsItem'

const News = (props)=> {

    const[article, setArticle] = useState([]);
    const[nextPage, setNextPage] = useState(null);
    const[previousPage, setPreviousPage] = useState(null);
    const[loading, setLoading] = useState(true);
    // constructor(){
    //     super();
    //     this.state={
    //         article: [],
    //         nextPage: null,
    //         previousPage: null,
    //         laoding: true,
    //     };
    // }

    const fetchData = async (url = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=12')=>{

        const response = await fetch(url);
        const data = await response.json();
        // this.setState({article: data, nextPage: data.next, previousPage: data.previous, laoding: false});
        setArticle(data);
        setNextPage(data.next);
        setPreviousPage(data.previous);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    useEffect(()=>{
        if(props.searchQuery!==null){
            fetchData(`https://api.spaceflightnewsapi.net/v4/articles/?limit=12&search=${props.searchQuery}`);
        }
    }, [props.searchQuery]);

    const handlePrevious = async ()=>{
        if(previousPage){
            fetchData(previousPage);
        }
    }

    const handleNext = async ()=>{
        if(nextPage){
            fetchData(nextPage);
        }
    }

    return (
      <div className='container my-3'>
        <h2>SpaceNewsHub - Top Headlines</h2>
        <div className="row row-cols-3">
            {loading? (
                <p>Loading...</p>
            ):article.results.map((results)=>(

            <div className="col-12 col-sm-6 col-md-4 mt-5" key={results.id}>
                <NewsItem title={results.title} summary={results.summary} imgUrl={results.image_url} url={results.url}/>
            </div>

            ))}
            
        </div>
            {!loading? (<div className='d-flex justify-content-between my-5'><div className="previous"><button disabled={!previousPage} type="button" class="btn btn-dark" onClick={handlePrevious}>&laquo; Prevoius</button></div>
            <div className="next"><button disabled={!nextPage} type="button" class="btn btn-dark" onClick={handleNext}>Next &raquo;</button></div></div>) :''}
      </div>
    )
}
export default News