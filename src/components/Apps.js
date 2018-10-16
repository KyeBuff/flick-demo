import React from 'react';

export default ({apps}) => (
	<section className="apps">
		<p>Available on</p>
		<ul className="apps-list">
			{apps.map(app => (
				<li className={app.toLowerCase() + '-icon app-icon'}></li>
			))}
		</ul>
	</section>
);