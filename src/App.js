import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingMedia: false,
    }
    this.fetchMedia = this.fetchMedia.bind(this);
  }
  fetchMedia() {
    this.setState({fetchMedia: true});
  }
  render() {
    return (
      <div className="container">
        <div className="case">
          <div className={this.state.fetchingMedia ? "case__inner has-items" : "case__inner"}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
