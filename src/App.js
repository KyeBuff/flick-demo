import React, { Component } from 'react';
import './App.css';
import seedDB from './utilities/seed_db';
import getMedia from './axios/get_media';
import Carousel from "./components/Carousel";
import AppError from "./components/Error";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      mediaError: '',
    }
  }
  componentDidMount() {
    // seedDB();
    getMedia()
      .then(({data}) => this.setState({media: data.data}))
      .catch(() => this.setState({mediaError: 'Unable to retrieve titles, please try again.'}))
  }

  render() {
    const {media, mediaError} = this.state;
    return (
      <div className="container">
        <div className="case">
          <div className="case__inner">
            {!mediaError ?
              media.length ?
              <Carousel 
                media={media} 
              /> : null
            : <AppError message={mediaError} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
