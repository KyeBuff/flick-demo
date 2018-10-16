import React from 'react';

export default ({onClick, disabled}) => (
	<button className={disabled ? "flick-btn flicked" : "flick-btn"} disabled={disabled} onClick={onClick}>Flick</button>
);