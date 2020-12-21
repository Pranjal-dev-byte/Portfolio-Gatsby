import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Project from '../components/Projects/Project';
import Footer from '../components/Footer/Footer';
import '../components/app.scss';
import favicon from '../img/favicon.ico';

// markup
const IndexPage = () => {
	const headerRef = useRef(null);
	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta
					name='google-site-verification'
					content='1jmmWqXLbh_oWXtPqZcsuhGpm-Kd66nIaQhi2Uk3QB8'
				/>
				<link rel='icon' href={favicon} type='image/x-icon' />
				<title>Portfolio | Pranjal</title>
			</Helmet>
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
