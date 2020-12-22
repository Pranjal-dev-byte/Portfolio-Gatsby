import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollAnmation({ props }) {
	useEffect(() => {
		let dur = 1;
		for (let ref of props) {
			dur++ % 2 !== 0
				? gsap.fromTo(
						ref.current,
						{ x: -50, opacity: 0 },
						{
							duration: dur,
							opacity: 1,
							x: 0,
							ease: 'ease-in',
							scrollTrigger: ref.current,
						}
				  )
				: gsap.fromTo(
						ref.current,
						{ x: 50, opacity: 0 },
						{
							duration: dur,
							opacity: 1,
							x: 0,
							ease: 'ease-in',
							scrollTrigger: ref.current,
						}
				  );
		}
	}, []);
	return <React.Fragment></React.Fragment>;
}

export default ScrollAnmation;
