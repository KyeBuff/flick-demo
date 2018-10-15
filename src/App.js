import React, { Component } from 'react';
import './App.css';
import seedDB from './utilities/seed_db';
import getMedia from './axios/get_media';
import Slider from "react-slick";
import Slide from "./components/Slide";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: []
    }
  }
  componentDidMount() {
    // seedDB();
    getMedia()
      .then(({data}) => this.setState({media: data.data}))

  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="container">
        <div className="case">
          <div className="case__inner">
            <Slider className="slider" {...settings}>
              {this.state.media.length ? this.state.media.map(m => <Slide media={m}/>) : null}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
