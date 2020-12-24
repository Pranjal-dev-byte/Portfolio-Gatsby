import React from 'react';
import wave from '../../img/wave.svg';

const Wave = () => {
	return (
		<div className='header__wave'>
			<div className='ocean'>
				<div
					className='wave'
					style={{ background: `url(${wave}) repeat-x` }}
				></div>
				<div
					className='wave'
					style={{ background: `url(${wave}) repeat-x` }}
				></div>
			</div>
		</div>
	);
};

export default Wave;
