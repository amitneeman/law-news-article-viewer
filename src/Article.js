import React, { Component } from 'react';
import styled from 'styled-components';

const ArticleContent = styled.div`
padding: 2vh;
max-width: 90%;
`;

const Header = styled.h1`
    padding-right: 4%;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Metadata = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-right: 8%;
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

const Article = ({article}) => (
    <Container>
        <Header>
            {article.title}
        </Header>
        <Metadata>
            <div>{getDate(article.modified)}</div>
        </Metadata>
        <FeaturedImage src={article.featured_image} />
        <ArticleContent dangerouslySetInnerHTML={{__html: article.content}} />
    </Container>
)

export default Article;