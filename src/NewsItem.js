import React from 'react';

const NewsItem = ({ article }) => {
    const { author, title, description, url, urlToImage } = article;
    return (
        <div>
            <h2><a href={url}>{title}</a></h2>
            { urlToImage && <img src={urlToImage} alt=""/> }
            <p>{description}</p>
            <p>{author}</p>
        </div>
    );
};

export default NewsItem;