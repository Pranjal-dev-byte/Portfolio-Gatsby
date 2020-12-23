import React from 'react';
import wave from '../../img/wave.svg';

const Wave = () => {
	return (
		<div className='header__wave'>
			<div class='ocean'>
				<div class='wave' style={{ background: `url(${wave}) repeat-x` }}></div>
				<div class='wave' style={{ background: `url(${wave}) repeat-x` }}></div>
			</div>
		</div>
	);
};

export default Wave;
