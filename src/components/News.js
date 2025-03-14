import React, { useState, useEffect  } from 'react';
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const updateNews =async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  },[])
  
  const handlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  }
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <h1 className="text-center m-4" style={{marginTop:"7rem"}}>
        News Monkey - Top Headlines {props.headline}
      </h1>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={
                        element.title === null ? "" : element.title.slice(0, 40)
                      }
                      description={
                        element.description === null
                          ? ""
                          : element.description.slice(0, 80)
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={
                        element.author === null ? " Unknown " : element.author
                      }
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "us",
  pageSize: 15,
  category: "sports",
};
export default News;
