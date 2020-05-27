import React, { Component } from 'react';

import { fetchData } from './api/index';
 
class App extends Component {
  state = {
    quote: "",
    author: ""
  }

  handleClick = () => {
    this.newQuote();
  }

  newQuote = async () => {
    const { text, author } = await fetchData();

    this.setState({
      quote: text,
      author: author
    });
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: "#2d2d31" }}>
        <div className="card rounded p-4" style={{ width: "600px" }} id="quote-box">
        <q id="text" className="font-italic">{this.state.quote}</q>
        <p id='author'>- {this.state.author}</p>

          <div className="d-flex justify-content-between">
            <a href={"https://twitter.com/intent/tweet?hashtags=quotes&text=\"" + this.state.quote + "\" " + this.state.author} id="tweet-quote" target="blank" style={{ marginLeft: "10px" }}><img src={'/img/twitter.png'} 
            alt="tweet this quote"
            title="Tweet this quote!"></img></a>

            <button className="btn btn-dark btn-md" id="new-quote" onClick={this.handleClick} style={{ marginRight: "18px" }}>New quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;