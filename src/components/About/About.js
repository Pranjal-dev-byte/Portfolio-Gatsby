import React from 'react'

const About = () => {
    return (
        <section class="section__about" id="about" >
            <h2 class="heading__secondary u-margin-medium" id="aboutHeading">About me</h2>
            <div class="about__content">
                <div class="about__content--block" id="blockOne">
                    <h3 class="heading__tertiary u-margin-small">background</h3>
                    <p class="about__content--text">I'm a <span class="about__highlited">Final year undergrad</span> pursuing Bachelors of Technology (B.Tech.) in Information Technology.</p>
                </div>
                <div class="about__content--block" id="blockTwo">
                    <h3 class="heading__tertiary u-margin-small">Passionate Software Developer</h3>
                    <p class="about__content--text">As a disciplined web developer, I stick with problems until I find the optimal solution to create high quality
                    products with a great user experience. I love to develop website via MEAN stack in the most creative and economical way possible.</p>
                </div>
                <div class="about__content--block" id="blockThree">
                    <h3 class="heading__tertiary u-margin-small">Problem Solver</h3>
                    <p class="about__content--text">My passion for programming stems from the power of using code to solve problems. Tech always inspires me to find creative, scalable, and robust solutions for modern problems, thus making the world a
                    better place. I firmly believe that we can achieve greatness if first, we achieve goodness.</p>
                </div> 
            </div>
        </section>
    )
}

export default About
