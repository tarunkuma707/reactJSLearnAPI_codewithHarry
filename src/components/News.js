import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    constructor(){
        super();
        this.state = {            
            articles: [],
            loading:false   
        }
    }
    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b5d2f5122d4d4376a5fd85eb4cf9fc4b";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h1>News Monkey - Top Headlines</h1>
        
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title ===null ? "" : element.title.slice(0,40)} description={element.description ===null ? "" : element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
            })}
            
        </div>
      </div>
    )
  }
}

export default News
