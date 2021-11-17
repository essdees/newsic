import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalresults: 0,
    };
  }

 

  componentDidMount = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f217cb192b146428e1d90ed985f9e95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parseddata.articles,
      totalresults: parseddata.totalResults,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f217cb192b146428e1d90ed985f9e95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalresults: parseddata.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center text-capitalize my-6">{`Newsic- Top ${this.props.category} Headlines`}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row d-flex ">
              {this.state.articles.map(
                ({ title, description, url, urlToImage }) => {
                  return (
                    <div className="col-md-4 " key={url}>
                      <Newsitem
                        title={title}
                        description={description === null ? "" : description}
                        imageurl={urlToImage}
                        newsurl={url}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
