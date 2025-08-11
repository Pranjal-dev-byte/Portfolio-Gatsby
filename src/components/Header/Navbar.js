import React, { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import NavSkeleton from './NavSkeleton';
import BrandLogo from './BrandLogo';
import ham from '../../img/ham.png';

const Navbar = ({ props }) => {
	const [isLoading, setIsLoading] = useState(true)
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
	setTimeout(()=>{
		setIsLoading(false)
	},2000)
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
					{toggle && <NavLinks props={props} />}
				</React.Fragment>
			) : (isLoading?<NavSkeleton />:<NavLinks props={props} />
			)}
		</React.Fragment>
	);
};

export default Navbar;
