import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize : 5,
    category:'sports'
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
    constructor(props){
        super(props);
        this.state = {            
            articles: [],
            loading:false,
            page:1,
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d2f5122d4d4376a5fd85eb4cf9fc4b&page=1&pageSize=5`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }
    handleNextClick = async () => {
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d2f5122d4d4376a5fd85eb4cf9fc4b&page=${this.state.page + 1}&pageSize=5`;
          this.setState({loading:true});
          let data = await fetch(url);
          let parsedData = await data.json();
          this.setState({
              page:this.state.page + 1,
              articles:parsedData.articles,
              loading:false
          })
      }
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d2f5122d4d4376a5fd85eb4cf9fc4b&page=${this.state.page - 1}&pageSize=5`;
        try{
          this.setState({loading:false});
          let data = await fetch(url);
          let parsedData = await data.json();
          this.setState({
              page:this.state.page - 1,
              articles:parsedData.articles,
              loading:true
          })
        }
        catch (e) {
          return e;
        } 
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center m-4'>News Monkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title ===null ? "" : element.title.slice(0,40)} description={element.description ===null ? "" : element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
            })}
            
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
      
    )
  }
}

export default News
