import React, { Component } from 'react';
import Axios from 'axios';
import NewsItem from './NewsItem';

class NewsList extends Component {
    state = {
        articles: null
    }
    initialize = async () => {
        const { category } = this.props;
        // alert(category);
        try {
            const response = await Axios.get(`https://newsapi.org/v2/top-headlines?country=kr${
                category === 'all' ? '': `&category=${category}`
            }&apiKey=5bc3f55a77874ccb804448cdd570542c`)
            // alert(response.data.articles[0].title);
            this.setState({
                articles: response.data.articles
            })
        } catch (e) {

        }
    }

    componentDidMount() {
        this.initialize();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.category!==this.props.category){
            this.initialize();
        }
    }
    
    
    render() {
        const { articles } = this.state;
        if(!articles) return null;
        const newsList = articles.map(
            article => <NewsItem article={article} key={article.title}/>
        )
        return (
            <div>
               <h2>NewsList</h2>
               <p>{newsList}</p>
                {JSON.stringify(this.state.articles)}
            </div>
        );
    }
}

export default NewsList;