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
      fetching: false,
      media: [],
      mediaError: '',
    }
    this.onFlick = this.onFlick.bind(this);
  }
  componentDidMount() {
    // seedDB();
    this.onFlick();
  }

  onFlick() {
    this.setState({fetching: true})
    getMedia()
      .then(({data}) => this.setState({media: data.data, fetching: false}))
      .catch(() => this.setState({mediaError: 'Unable to retrieve titles, please try again.', fetching: false}))
  }

  render() {
    const {media, mediaError, fetching} = this.state;
    return (
      <div className="container">
        <div className="case">
          <div className="case__inner">
            {!mediaError ?
              media.length ?
              <Carousel 
                fetching={fetching}
                media={media} 
                onFlick={this.onFlick}
              /> : null
            : <AppError message={mediaError} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
