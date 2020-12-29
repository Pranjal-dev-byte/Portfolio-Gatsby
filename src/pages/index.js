import React, { useRef } from 'react';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Project from '../components/Projects/Project';
import Footer from '../components/Footer/Footer';
import '../components/app.scss';
import Head from '../components/head';

// markup
const IndexPage = () => {
	const headerRef = useRef(null);
	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	return (
		<div>
			<Head />
			<div ref={headerRef}>
				<Header refProps={[headerRef, aboutRef, projectRef]} />
			</div>
			<div ref={aboutRef}>
				<About />
			</div>
			<div ref={projectRef}>
				<Project />
			</div>
			<Footer />
		</div>
	);
};

export default IndexPage;
