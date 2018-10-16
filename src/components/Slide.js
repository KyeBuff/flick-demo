import React from 'react';
import Apps from './Apps';

import netflixImg from '../assets/img/netflix.png';

export default ({media}) => (
	<div className="slide">
		<p className="title">{media.title}</p>
		{media.img_url ?<img src={media.img_url} alt={media.title} /> : null }
		{media.apps && media.apps.length ?<Apps apps={media.apps}/> : null}
	</div>
);