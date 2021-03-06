import React from 'react';
import { motion } from 'framer-motion';

const BrandLogo = () => {
	const svgVariants = {
		hidden: {
			opacity: 0,
			rotate: -180,
		},
		visible: {
			opacity: 1,
			rotate: 0,
			transition: { duration: 1 },
		},
	};
	const pathVariants = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: { duration: 2 },
		},
	};
	return (
		<div className='svg__wrap' style={{ height: '7rem', width: '8rem' }}>
			<motion.svg
				className='header__nav--svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 153.64 216.02'
				variants={svgVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.path
					className='cls-1'
					d='M247.22 144c0-11 1.54-22.95 8.45-34.82-18.22-4.52-32.27-21.69-36.82-36.87-7.55 7.38-15 9.1-26.68 9.1l-78.32-.11L103.2 108a17.4 17.4 0 0110.65 16.22v122.1a17.38 17.38 0 01-10.65 16.21l10.65 25.84h29.91l10.67-25.84a17.38 17.38 0 01-10.67-16.21v-48.14h48.41c11.72 0 19.13 2.89 26.68 10.27 4.93-15.18 19.77-26.5 38-31-6.91-11.87-9.62-22.41-9.62-33.41m-41.33 27.64h-62v-64.6h62c9.81 0 16 6.18 16 14.38v36.91c0 8.61-4.86 13.31-16 13.31'
					transform='translate(-103.2 -72.35)'
					variants={pathVariants}
				/>
			</motion.svg>
		</div>
	);
};

export default BrandLogo;
