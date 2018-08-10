import React, { Component } from 'react';
import axios from 'axios';
import {ScaleLoader} from 'react-spinners'
import Article from './Article';
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
       <div style={{marginTop: "20%"}}>
          <ScaleLoader style={{
        }} color="#af2a1c" height="62" width="17" />
       </div>
      )
    }
    return (
      <Article article={this.state.article} />
    )
  }
  render() {
    return (
      <div style={{
        display: "flex",
        width: "100%",
        height: "100%",
        direction: "rtl",
        justifyContent: "center",
      }}>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
