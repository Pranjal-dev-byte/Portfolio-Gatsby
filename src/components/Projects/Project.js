import React from 'react'
import blog from '../../img/blog-proj.svg'
import ecom from '../../img/ecom-proj.svg'
import maze from '../../img/maze-proj.svg'

const Project = () => {
    return (
        <section class="section__projects" id="projects">
        <h2 class="heading__secondary u-margin-big" id="projHeading">Few Projects</h2>
            <div class="project" id="one">
                <img src={ecom} alt="project-1" class="project__img" id="imgOne" />
                <div class="project__text" id="textOne">
                    <h3 class="heading__tertiary u-margin-small">Learncool Web App</h3>
                    <p class="project__text--section">
                        LANGUAGES AND TECHNOLOGIES USED: HTML, CSS, REACT, STORYBOOK, FIGMA
                        <br/>
                        <p class="project__text--desc">
                            Description: Worked on their existing web-app by adding new UI
                            features and debugging their existing ones in REACT.JS. Prototyped
                                react components from Figma for their UX revamping. Applied BEM
                                methodology for naming CSS classes to resolve conflicting CSS issues.
                                Prototyped Figma designs in storybook-react following
                                component-driven design methodology. Used React hooks as it was the
                                company standard. Collaborated with a team of 16 developers on Jira to
                                improve dev coordination.
                        </p>
                    </p>
                    <div class="btn-wrap">
                        <button class="btn btn-white u-margin-medium-top">
                            <a target="_blank" rel="noreferrer" href="https://app.learncool.info" class="project__visit">Visit Site</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="project" id="three">
                <img src={blog} alt="project-3" class="project__img" id="imgThree" />
                <div class="project__text" id="textThree">
                    <h3 class="heading__tertiary u-margin-small">Ridegoat Web App</h3>
                    <p class="project__text--section">
                        LANGUAGES AND TECHNOLOGIES USED: WORDPRESS, HTML, CSS, FIGMA
                        <br/>
                        <p class="project__text--desc">
                            Description: Working on a client's professional website to make it load
                            fast, highly optimized by using efficient and effective WordPress plugins,
                            optimizing them to the highest, minifying overhead cache, eliminating
                            render-blocking resources to paint content early.
                            Developing effective and appealing UI via Elementor. Debugging various
                            issues regarding web-app and the overall business logic.
                        </p>
                    </p>
                    <div class="btn-wrap">
                        <button class="btn btn-white u-margin-medium-top">
                            <a target="_blank" rel="noreferrer" href="https://www.ridegoat.com" class="project__visit">Visit Site</a>
                        </button>
                        
                    </div>
                </div>
            </div>
            <div class="project" id="three">
                <img src={blog} alt="project-3" class="project__img" id="imgThree" />
                <div class="project__text" id="textThree">
                    <h3 class="heading__tertiary u-margin-small">Paradise Landing Page</h3>
                    <p class="project__text--section">
                        LANGUAGES AND TECHNOLOGIES USED: HTML, CSS, SCSS, VANILLA JS, FIGMA
                        <br/>
                        <p class="project__text--desc">
                            Description: Landing page for a fictitious touring company. Cutting-edge UI implemented via CSS preprocessor SCSS and
                            Vanilla JS. Along with a couple of animations to make user experience even more appealing.
                        </p>
                    </p>
                    <div class="btn-wrap">
                        <button class="btn btn-white u-margin-medium-top">
                            <a target="_blank" rel="noreferrer" href="https://paradise-tours.netlify.app" class="project__visit">Visit Site</a>
                        </button>
                        <button class="btn btn-blue u-margin-medium-top">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Pranjal-dev-byte/Paradise-tours" class="project__link">View Repo</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="project" id="four">
                <img src={maze} alt="project-4" class="project__img" id="imgFour" />
                <div class="project__text" id="textFour">
                    <h3 class="heading__tertiary u-margin-small">Blogging website</h3>
                    <p class="project__text--section">
                        LANGUAGES AND TECHNOLOGIES USED: HTML, CSS, NODE.JS, EXPRESS.JS, MONGODB, VANILLA JS
                        <br/>
                        <p class="project__text--desc">
                            Description: A blogging website implementing MVC architecture allowing the user to create or delete their existing blog,
                            the backend is implemented via express.js and the database used to store pertaining blog information is MongoDB wrapped
                            around the mongoose module.
                        </p>
                    </p>
                    <div class="btn-wrap">
                        <button class="btn btn-white u-margin-medium-top">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Pranjal-dev-byte/Blog-web" class="project__visit">Visit Site</a>
                        </button>
                        <button class="btn btn-blue u-margin-medium-top">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Pranjal-dev-byte/Blog-web" class="project__link">View Repo</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
