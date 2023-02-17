import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2023-02-15&to=2023-02-15&sortBy=popularity&apiKey=9ac1098f2993452c86320b8049e73465&pageSize=20"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles , totalArticles: parseData.totalResults})
    }

    // https://newsapi.org/v2/everything?q=apple&from=2023-02-15&to=2023-02-15&sortBy=popularity&apiKey=9ac1098f2993452c86320b8049e73465&page=2
    handlePrevClick = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-15&to=2023-02-15&sortBy=popularity&apiKey=9ac1098f2993452c86320b8049e73465&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);

    this.setState({
        page: this.state.page - 1,
        articles: parseData.articles
    })
    }
    handleNextClick = async() => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
            
        }
        else{
            let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-15&to=2023-02-15&sortBy=popularity&apiKey=9ac1098f2993452c86320b8049e73465&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json()
            console.log(parseData);

        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })

        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Nation - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 50) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
