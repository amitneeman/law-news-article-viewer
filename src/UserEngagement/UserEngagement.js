import React, { Component } from 'react';
import Proxy from './Proxy';
import styled from 'styled-components';

const Container = styled.div
`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;
`

const ReactionsContainer = styled.div
`
position: absolute;
display: flex;
justify-content: center;
margin-top: 16%;
user-select: none;
justify-content: space-around;
width: 100%;
`;

const ReactionWrapper = styled.div
`
&:active {
    padding: 40px;
  }
transition: all 0.5s;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
outline: none;
-webkit-tap-highlight-color: rgba(0,0,0,0);
height: 12vh;
justify-content: space-around;
width: 50vh;
border: solid #c12810;
border-radius: 50%;
padding: 10px;
background: #d3d3d329;
box-shadow: 0 0 3px black;
`;

const ReactionTitle = styled.label
`
font-size: 13pt;
`;

const ReactionCount = styled.label
`
color: white;
font-size: 12pt;
margin-top: 9px;
background: #c12810;
font-weight: bold;
width: 61%;
text-align: center;
border-radius: 8px;
padding: 3px;
border: solid beige;

`;

const Header = styled.h2
`
margin-bottom: 13vh;
`
  

class UserEngagement extends Component {
    constructor(props){
        super(props);
        this.proxy = new Proxy();
        this.state = {};
    }

    componentDidMount(){
       this.proxy.getByArticle(this.props.articleId).then((data) => {
            console.log(data);
            this.setState({
                userEngagement: data
            })
        });
    }

    getCount = (emotion)=>{
        if(!this.state.userEngagement){
            return '...'
        }else{
             let data = this.state.userEngagement[emotion] || 0
             return data;
        }
    }

    updateArticle = (id,emotion) => {
        if(emotion === this.state.reacted){
            return
        }
        let newData = {
            ...this.state.userEngagement
        };
        if(this.state.reacted){
            newData[this.state.reacted] -= 1;
            this.proxy.updateArticle(id,this.state.reacted,-1)
        }
        newData[emotion] = (this.state.userEngagement[emotion] || 0) + 1
        this.setState({
            userEngagement: newData,
            reacted: emotion
        })
        this.proxy.updateArticle(id,emotion,1)
    }

    render() {
        const {articleId} = this.props;
        return (
            <Container>
                <Header>מה דעתך?</Header>
                <ReactionsContainer>
                <ReactionWrapper 
                    style={this.state.reacted === "interesting" ? {boxShadow: "0 0 18px black"} : {}}
                    onClick={() => this.updateArticle(articleId,'interesting')}>
                    <ReactionCount>{this.getCount('interesting')}</ReactionCount>
                    <ReactionTitle> מעניין </ReactionTitle>
                </ReactionWrapper >

                <ReactionWrapper 
                style={this.state.reacted === "annoying" ? {boxShadow: "0 0 18px black"} : {}}
                onClick={() => this.updateArticle(articleId,'annoying')}>
                    <ReactionCount>{this.getCount('annoying')}</ReactionCount>
                    <ReactionTitle> מעצבן </ReactionTitle>
                </ReactionWrapper>
                <ReactionWrapper 
                style={this.state.reacted === "sad" ? {boxShadow: "0 0 18px black"} : {}}
                onClick={() => this.updateArticle(articleId,'sad')}>
                    <ReactionCount>{this.getCount('sad')}</ReactionCount>
                    <ReactionTitle> עצוב </ReactionTitle>
                </ReactionWrapper>

            </ReactionsContainer>
            </Container>
        );
    }
}

export default UserEngagement;