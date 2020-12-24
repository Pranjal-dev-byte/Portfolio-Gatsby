import React, { useState, useEffect } from 'react';
import Wave from './Wave';
import BrandLogo from './BrandLogo';
import SocialScroll from './SocialScroll';
import NavLinks from './NavLinks';

const Header = (props) => {
	const [state, setState] = useState('initial');
	useEffect(() => {
		function handleWindowMouseMove() {
			window.scrollY > 10 ? setState('fixed') : setState('initial');
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
					<NavLinks props={props.refProps} />
				</nav>
				<div
					className={`header__content ${
						state === 'fixed' ? 'padding-offset' : ''
					}`}
				>
					<h1 className='heading__primary'>
						<SocialScroll />
					</h1>
				</div>
				<Wave />
			</div>
		</div>
	);
};

export default Header;
