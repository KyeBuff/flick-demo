import React from 'react';

export default ({media}) => (
	<div className="slide">
		<p className="title">{media.title}</p>
		{media.img_url ?<img src={media.img_url} alt={media.title} /> : null }
	</div>
);