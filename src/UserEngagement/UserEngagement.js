import React, { Component } from 'react';
import Proxy from './Proxy';
import { FaBed ,FaHeart} from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { IoMdHammer } from "react-icons/io";
import styled from 'styled-components';

const ReactionsContainer = styled.div
`
display: flex;
justify-content: center;
margin-top: 25px;
border-radius: 10px;
background: #d3d3d32b;
box-shadow: 0 0 2px 0px #0000005e;
user-select: none;
`;

const ReactionWrapper = styled.div
`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
outline: none;
-webkit-tap-highlight-color: rgba(0,0,0,0);

`;

const ReactionTitle = styled.label
`
font-size: 10pt;
`;

const ReactionCount = styled.label
`
color: gray;
font-size: 9pt;

`;
  

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
        let newData = {
            ...this.state.userEngagement,
            [emotion]: (this.state.userEngagement[emotion] || 0) + 1
        }

        this.setState({
            userEngagement: newData
        })
        this.proxy.updateArticle(id,emotion)
    }

    render() {
        const {articleId} = this.props;
        return (
            <ReactionsContainer>
                <ReactionWrapper onClick={() => this.updateArticle(articleId,'like')}>
                    <FaHeart style={{fontSize: "25pt"}}/>
                    <ReactionTitle> אהבתי </ReactionTitle>
                    <ReactionCount>{this.getCount('like')}</ReactionCount>
                </ReactionWrapper >

                <ReactionWrapper onClick={() => this.updateArticle(articleId,'annoying')}>
                    <IoMdHammer style={{fontSize: "25pt"}}/>
                    <ReactionTitle> מעצבן </ReactionTitle>
                    <ReactionCount>{this.getCount('annoying')}</ReactionCount>
                </ReactionWrapper>
                <ReactionWrapper onClick={() => this.updateArticle(articleId,'interesting')}>
                    <GoRocket style={{fontSize: "25pt"}}/>
                    <ReactionTitle> מעניין </ReactionTitle>
                    <ReactionCount>{this.getCount('interesting')}</ReactionCount>
                </ReactionWrapper>

                <ReactionWrapper onClick={() => this.updateArticle(articleId,'boring')}>
                    <FaBed style={{fontSize: "25pt"}}/>
                    <ReactionTitle> משעמם </ReactionTitle>
                    <ReactionCount>{this.getCount('boring')}</ReactionCount>
                </ReactionWrapper>
            </ReactionsContainer>
        );
    }
}

export default UserEngagement;