import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:6,
    category:'general'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  }

  articles=[]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
      totalresults:0
    };
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f217cb192b146428e1d90ed985f9e95&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata=await data.json();
    this.setState({loading:false});
    this.setState({articles:parseddata.articles, totalresults:parseddata.totalResults})

  }

  handlePrevClick=async()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f217cb192b146428e1d90ed985f9e95&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata=await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parseddata.articles,
      loading:false
    })

  }

  handleNextClick=async()=>{
    if(this.state.page+1>Math.ceil( this.state.totalresults/this.props.pageSize)){}
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f217cb192b146428e1d90ed985f9e95&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata=await data.json();
    

    this.setState({
      page:this.state.page+1,
      articles:parseddata.articles,
      loading:false
    })}
  }

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">Newsic- Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row d-flex ">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 " key={element.url}>
              <Newsitem
            title={element.title}
            description={element.description===null?"":element.description}
            imageurl={element.urlToImage}
             newsurl={element.url}
          />
          </div>
          })}
          

        </div>
        <div className="d-flex justify-content-between">

        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button disabled={this.state.page===Math.ceil( this.state.totalresults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>

      </div>
    );
  }
}

export default News;
