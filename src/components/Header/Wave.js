import React from 'react';

const Wave = () => {
	return (
		<div className='header__wave'>
			<svg
				className='header__wave--svg'
				xmlns='http://www.w3.org/2000/svg'
				preserveAspectRatio='none'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#ffffff'
					fillOpacity='.2'
					d='M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,224C840,224,960,128,1080,106.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
				></path>
			</svg>
			<svg
				className='header__wave--svg'
				xmlns='http://www.w3.org/2000/svg'
				preserveAspectRatio='none'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#ffffff'
					fillOpacity='.8'
					d='M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,224C840,224,960,128,1080,106.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
				></path>
			</svg>
		</div>
	);
};

export default Wave;
