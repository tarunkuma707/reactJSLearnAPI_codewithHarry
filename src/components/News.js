import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 15,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = this.props.headline;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d2f5122d4d4376a5fd85eb4cf9fc4b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  
  fetchMoreData = async () => {
    // a fake async api call like which sends
    this.setState({page:this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d2f5122d4d4376a5fd85eb4cf9fc4b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state. articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center m-4">
          News Monkey - Top Headlines {this.props.headline}
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
                {this.state.articles.map((element) => {
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
}

export default News;
