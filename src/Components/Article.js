import React, { Component } from 'react';
import styled from 'styled-components';
import Proxy from '../UserEngagement/Proxy';
import UserEngagement from '../UserEngagement/UserEngagement';


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

const Metadata = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #8c8c8c;
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
            <Container>
                <Header>
                {article.title}
                </Header>
                <Metadata>
                <div>{getDate(article.modified)}</div>
                </Metadata>
                <FeaturedImage src={article.featured_image} />
                <ArticleContent dangerouslySetInnerHTML={{__html: article.content}} />
                <UserEngagement articleId={article.ID}/>
            </Container>
        )
    }
}

export default Article;