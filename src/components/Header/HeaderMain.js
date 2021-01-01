import React from 'react';
import TypeEffect from './TypeEffect';
import SocialLinks from './SocalLinks';

const HeaderMain = () => {
	return (
		<React.Fragment>
			<span className='heading__primary--main'>Pranjal Misra</span>
			<TypeEffect />
			<div className='header__social--wrap'>
				<SocialLinks />
			</div>
		</React.Fragment>
	);
};

export default HeaderMain;
