import React from 'react';

import netflixImg from '../assets/img/netflix.png';

export default ({media}) => (
	<div className="slide">
		<p className="title">{media.title}</p>
		<img src={media.img_url ? media.img_url : netflixImg} alt={media.title} />
	</div>
);