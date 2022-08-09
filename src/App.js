import React, { Component } from 'react';
import axios from 'axios';
import {ScaleLoader} from 'react-spinners'
import Article from './Components/Article';
import Header from './Components/Header';
class App extends Component {

  //  TODO: EXTRACT THE ARTICLE DATA AND SHOW IW
  state = {
    article: null
  }

  componentDidMount(){
    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/www.lawnews385264377.wordpress.com/posts/${this.props.articleId}`).then((data) => {
      this.setState({
        article: data.data
      });
    });
  }

  getContent = () => {
    if(this.state.article === null){
      return (
        <div style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        marginTop: '20px',
       }}>
          <ScaleLoader style={{
        }} color="#af2a1c" height={62} width={17} />
       </div>
      )
    }
    return (
      <Article isWeb={this.props.isWeb} article={this.state.article} />
    )
  }

  displayHeader = () => {
    if(this.props.isWeb && !(this.state.article === null)){
      return <Header />
    }else{
      return null;
    }
  }

  render() {
    return (
      <div style={{
        direction: "rtl"
      }}>
        {this.displayHeader()}
        {this.getContent()}
      </div>
    );
  }
}

export default App;
