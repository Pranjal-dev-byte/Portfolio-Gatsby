import React, { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import BrandLogo from './BrandLogo';
import ham from '../../img/ham.png';

const Navbar = (props) => {
	let defaultWidth;
	const [toggle, setToggle] = useState(false);

	if (typeof window !== `undefined`) {
		defaultWidth = window.innerWidth;
	}
	const [width, setWidth] = useState(defaultWidth);

	const ontoggle = () => {
		setToggle(!toggle);
	};
	useEffect(() => {
		function updateWindowWidth() {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', updateWindowWidth);
		return () => window.removeEventListener('resize', updateWindowWidth);
	}, []);
	return (
		<React.Fragment>
			<BrandLogo />

			{width < 900 ? (
				<React.Fragment>
					<img
						src={ham}
						alt='Ham-icon'
						className='header__nav--ham'
						onClick={ontoggle}
					/>
					{toggle && <NavLinks props={props.refProps} />}
				</React.Fragment>
			) : (
				<NavLinks props={props.refProps} />
			)}
		</React.Fragment>
	);
};

export default Navbar;
