import React, { Component } from 'react';
import Proxy from './Proxy';
import styled from 'styled-components';

const Emotion = styled.button`
font-size: 12pt;
    padding: 10px;
    border-radius: 81%;
    height: 15vh;
    width: 27%;
    outline: none;
    margin-left: 10px;

`;

class UserEngagement extends Component {
    constructor(props){
        super(props);
        this.proxy = new Proxy();
    }

    componentDidMount(){
        this.proxy.getByArticle(this.props.articleId).then((data) => {
            console.log(data);
            this.setState({
                userEngagement: data
            })
        });
    }

    getReactions = () => {
        const reactions = ['אהבתי','מעניין', 'משעמם'];
        return reactions.map((emotion) => (
            <Emotion key={emotion}>
                {emotion}
            </Emotion>
        ))
    }

    render() {
        return (
            <div>
                {this.getReactions()}
            </div>
        );
    }
}

export default UserEngagement;