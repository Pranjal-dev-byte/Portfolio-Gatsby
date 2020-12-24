import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TypeEffect from './TypeEffect';
import SocialLinks from './SocalLinks';

gsap.registerPlugin(ScrollTrigger);

const SocialScroll = () => {
	const bounce = useRef(null);
	const bounceSocial = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			bounce.current,
			{ y: -100, opacity: 0 },
			{
				duration: 4,
				opacity: 1,
				y: 0,
				ease: 'bounce',
			}
		);
		gsap.fromTo(
			bounceSocial.current,
			{ y: 100, opacity: 0 },
			{
				duration: 4,
				opacity: 1,
				y: 0,
				ease: 'bounce',
			}
		);
	}, []);
	return (
		<React.Fragment>
			<span ref={bounce} className='heading__primary--main'>
				Pranjal Misra
			</span>
			<TypeEffect />
			<div ref={bounceSocial} className='header__social--wrap'>
				<SocialLinks />
			</div>
		</React.Fragment>
	);
};

export default SocialScroll;
