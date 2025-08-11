import React from 'react';
import spinner from '../../img/spinner.svg';

const HeaderSkeleton = () => {
	return (
        <div className='header__loader'>
            <img src={spinner} alt="LinkedIn Profile" />
            <span className="footer__name"  style={{transform: "translateX(41px)"}} >loading...</span>
        </div>
	);
};

export default HeaderSkeleton;
