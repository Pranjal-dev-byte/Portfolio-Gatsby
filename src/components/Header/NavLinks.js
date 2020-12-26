import React from 'react';

const NavLinks = ({ props }) => {
	console.log(props);

	const executeScrollHome = () => props[0].current.scrollIntoView();
	const executeScrollAbout = () => props[1].current.scrollIntoView();
	const executeScrollProject = () => props[2].current.scrollIntoView();
	// run this function from an event handler or an effect to execute scroll
	return (
		<ul className='header__nav--list'>
			<li
				className='header__nav--items'
				onClick={executeScrollHome}
				onKeyDown={executeScrollHome}
			>
				Home
			</li>
			<li
				className='header__nav--items'
				onClick={executeScrollAbout}
				onKeyDown={executeScrollAbout}
			>
				About
			</li>
			<li
				className='header__nav--items'
				onClick={executeScrollProject}
				onKeyDown={executeScrollProject}
			>
				Projects
			</li>
		</ul>
	);
};

export default NavLinks;
