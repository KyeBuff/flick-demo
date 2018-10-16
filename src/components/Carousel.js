import React from 'react';
import Slider from "react-slick";
import Slide from "./Slide";

export default ({media}) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
    };

    return (
	    <Slider className="slider media-carousel" {...settings}>
	      {media.map(m => <Slide media={m}/>)}
	    </Slider>
    );
};