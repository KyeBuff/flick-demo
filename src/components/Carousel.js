import React from 'react';
import Slider from "react-slick";
import Slide from "./Slide";
import FlickButton from "./FlickButton";

export default ({media, onFlick, fetching}) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
    };

    return (
    	<section class="media-carousel-container">
		    <Slider className="slider media-carousel" {...settings}>
		      {media.map(m => <Slide media={m}/>)}
		    </Slider>
		    <FlickButton disabled={fetching} onClick={onFlick} />
		</section>
    );
};