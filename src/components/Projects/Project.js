import React, { useRef } from 'react';
import blog from '../../img/blog-proj.svg';
import ecom from '../../img/ecom-proj.svg';
import ScrollAnimation from '../ScrollAnmation';
import train from '../../img/train.svg';
import goat from '../../img/GOAT.svg';

const Project = () => {
	const block1 = useRef(null);
	const block2 = useRef(null);
	const block3 = useRef(null);
	const block4 = useRef(null);
	const block5 = useRef(null);
	const block6 = useRef(null);
	const block7 = useRef(null);
	const block8 = useRef(null);

	return (
		<section className='section__projects' id='projects'>
			<h2 className='heading__secondary u-margin-big' id='projHeading'>
				Few Projects
			</h2>
			<div className='project' id='one'>
				<img
					src={train}
					alt='project-1'
					className='project__img'
					ref={block1}
				/>
				<div className='project__text' id='textOne' ref={block2}>
					<h3 className='heading__tertiary u-margin-small'>
						Learncool Web App
					</h3>
					<div className='project__text--section'>
						LANGUAGES AND TECHNOLOGIES USED: HTML, CSS, REACT, STORYBOOK, FIGMA
						<br />
						<p className='project__text--desc'>
							Description: Worked on their existing web-app by adding new UI
							features and debugging their existing ones in REACT.JS. Prototyped
							react components from Figma for their UX revamping. Applied BEM
							methodology for naming CSS classes to resolve conflicting CSS
							issues. Prototyped Figma designs in storybook-react following
							component-driven design methodology. Used React hooks as it was
							the company standard. Collaborated with a team of 16 developers on
							Jira to improve dev coordination.
						</p>
					</div>
					<div className='btn-wrap'>
						<button className='btn btn-white u-margin-medium-top'>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://app.learncool.info'
								className='project__visit'
							>
								Visit Site
							</a>
						</button>
					</div>
				</div>
			</div>
			<div className='project' id='three'>
				<img src={goat} alt='project-3' className='project__img' ref={block3} />
				<div className='project__text' id='textThree' ref={block4}>
					<h3 className='heading__tertiary u-margin-small'>Ridegoat Web App</h3>
					<div className='project__text--section'>
						LANGUAGES AND TECHNOLOGIES USED: WORDPRESS, HTML, CSS, FIGMA
						<br />
						<p className='project__text--desc'>
							Description: Working on a client's professional website to make it
							load fast, highly optimized by using efficient and effective
							WordPress plugins, optimizing them to the highest, minifying
							overhead cache, eliminating render-blocking resources to paint
							content early. Developing effective and appealing UI via
							Elementor. Debugging various issues regarding web-app and the
							overall business logic.
						</p>
					</div>
					<div className='btn-wrap'>
						<button className='btn btn-white u-margin-medium-top'>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://www.ridegoat.com'
								className='project__visit'
							>
								Visit Site
							</a>
						</button>
					</div>
				</div>
			</div>
			<div className='project' id='three'>
				<img src={ecom} alt='project-3' className='project__img' ref={block5} />
				<div className='project__text' id='textThree' ref={block6}>
					<h3 className='heading__tertiary u-margin-small'>E-Commerce App</h3>
					<div className='project__text--section'>
						LANGUAGES AND TECHNOLOGIES USED: HTML, CSS, NODE.JS, EXPRESS.JS,
						CUSTOM DB
						<br />
						<p className='project__text--desc'>
							Description: Developed an E-Commerce website using cookies to
							store registered user information. The passwords are salted and
							stored in an encrypted format to enhance app security. A user can
							add items to their cart, edit their cart. Whilst an admin has the
							permission to edit or add products using the admin interface. All
							of the user, admin, products information is stored in a JSON file
							after processing via a custom database implemented via Node.js.
						</p>
					</div>
					<div className='btn-wrap'>
						<button className='btn btn-white u-margin-medium-top'>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://github.com/Pranjal-dev-byte/E-comm'
								className='project__visit'
							>
								Visit Site
							</a>
						</button>
						<button className='btn btn-blue u-margin-medium-top'>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://github.com/Pranjal-dev-byte/E-comm'
								className='project__link'
							>
								View Repo
							</a>
						</button>
					</div>
				</div>
			</div>
			<div className='project' id='four'>
				<img src={blog} alt='project-4' className='project__img' ref={block7} />
				<div className='project__text' id='textFour' ref={block8}>
					<h3 className='heading__tertiary u-margin-small'>Blogging website</h3>
					<div className='project__text--section'>
						LANGUAGES AND TECHNOLOGIES USED: HTML, CSS, NODE.JS, EXPRESS.JS,
						MONGODB, VANILLA JS
						<br />
						<p className='project__text--desc'>
							Description: A blogging website implementing MVC architecture
							allowing the user to create or delete their existing blog, the
							backend is implemented via express.js and the database used to
							store pertaining blog information is MongoDB wrapped around the
							mongoose module.
						</p>
					</div>
					<div className='btn-wrap'>
						<button className='btn btn-white u-margin-medium-top'>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://github.com/Pranjal-dev-byte/Blog-web'
								className='project__visit'
							>
								Visit Site
							</a>
						</button>
						<button className='btn btn-blue u-margin-medium-top'>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://github.com/Pranjal-dev-byte/Blog-web'
								className='project__link'
							>
								View Repo
							</a>
						</button>
					</div>
				</div>
			</div>
			<ScrollAnimation
				props={[block1, block2, block3, block4, block5, block6, block7, block8]}
			/>
		</section>
	);
};

export default Project;
