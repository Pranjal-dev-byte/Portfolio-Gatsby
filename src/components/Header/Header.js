import React, { useState, useEffect, useRef } from 'react';
import TypeEffect from './TypeEffect';
import Wave from './Wave';
import BrandLogo from './BrandLogo';
import linkedIn from '../../img/linked.svg';
import git from '../../img/github.svg';
import insta from '../../img/insta.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
	const bounce = useRef(null);
	const bounceSocial = useRef(null);

	const [state, setState] = useState('initial');
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
		function handleWindowMouseMove() {
			if (window.scrollY > 10) {
				setState('fixed');
			} else {
				setState('initial');
			}
		}
		window.addEventListener('scroll', handleWindowMouseMove);
		return () => window.removeEventListener('scroll', handleWindowMouseMove);
	}, []);
	return (
		<div>
			<div className='header'>
				<nav
					className={`header__nav ${
						state !== 'fixed' ? 'header__nav--initial' : 'header__nav--fixed'
					}`}
				>
					<BrandLogo />
					<ul className='header__nav--list'>
						<li className='header__nav--items'>Home</li>
						<li className='header__nav--items'>About</li>
						<li className='header__nav--items'>Projects</li>
					</ul>
				</nav>
				<div
					className={`header__content ${
						state === 'fixed' ? 'padding-offset' : ''
					}`}
				>
					<h1 class='heading__primary'>
						<span ref={bounce} class='heading__primary--main'>
							Pranjal Misra
						</span>
						<TypeEffect />
						<div ref={bounceSocial} className='header__social--wrap'>
							<div class='heading__primary--icons'>
								<span class='heading__primary--icon'>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.linkedin.com/in/PranjalMisra12'
									>
										<img src={linkedIn} alt='LinkedIn Profile' />
									</a>
								</span>
								<span class='heading__primary--icon'>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://github.com/Pranjal-dev-byte'
									>
										<img src={git} alt='LinkedIn Profile' />
									</a>
								</span>
								<span class='heading__primary--icon'>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.instagram.com/misra_pranjal_'
									>
										<img src={insta} alt='LinkedIn Profile' />
									</a>
								</span>
							</div>
							<button
								class='btn btn-resume u-margin-medium-top'
								id='animateSocial'
							>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://drive.google.com/file/d/1nCODWuXSJ7XEsrvIuGeJsmMMitustSSa/view?usp=sharing'
									class='header__resume'
								>
									Resume
								</a>
							</button>
						</div>
					</h1>
				</div>
				<Wave />
			</div>
		</div>
	);
};

export default Header;
