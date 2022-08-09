import React, { Component } from 'react';
import styled from 'styled-components';
import Proxy from '../UserEngagement/Proxy';
import UserEngagement from '../UserEngagement/UserEngagement';
import Author from './Author';


const ArticleContent = styled.div`
max-width: 90%;
`;

const Header = styled.h1`
    width: 100%;
`;

const Container = styled.div`
padding: 2vh
word-wrap: break-word;
`;


const FeaturedImage = styled.img`
    margin-top: 5vh;
    margin-bottom: 2vh;
`

const getDate = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

class Article extends Component{
    render(){
        const {article} = this.props
        return (
            <Container style={this.props.isWeb ? {paddingTop: "10vh"} : {}}>
                <Header>
                {article.title}
                </Header>
                <Author date={getDate(article.modified)} />
                <FeaturedImage src={article.featured_image} />
                <ArticleContent dangerouslySetInnerHTML={{__html: article.content}} />
                <UserEngagement articleId={article.ID}/>
            </Container>
        )
    }
}
export default Article;