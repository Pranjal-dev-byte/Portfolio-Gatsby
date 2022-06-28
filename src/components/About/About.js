import React, { useRef } from 'react';
import ScrollAnimation from '../ScrollAnmation';

const About = () => {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);

  return (
    <section className="section__about" id="about">
      <h2
        className="heading__secondary heading-about u-margin-medium"
        id="aboutHeading"
      >
        About me
      </h2>
      <div className="about__content">
        <div className="about__content--block" ref={block1} id="blockOne">
          <h3 className="heading__tertiary u-margin-small">background</h3>
          <p className="about__content--text">
            I'm a <span className="about__highlited">Full Stack Developer</span>
            <span>&nbsp;</span>
            currently working for Accenture .
          </p>
        </div>
        <div className="about__content--block" ref={block2} id="blockTwo">
          <h3 className="heading__tertiary u-margin-small">
            Passionate Software Developer
          </h3>
          <p className="about__content--text">
            As a disciplined web developer, I stick with problems until I find
            the optimal solution to create high quality products with a great
            user experience. I love to develop website via MERN stack in the
            most creative and economical way possible.
          </p>
        </div>
        <div className="about__content--block" ref={block3} id="blockThree">
          <h3 className="heading__tertiary u-margin-small">Problem Solver</h3>
          <p className="about__content--text">
            My passion for programming stems from the power of using code to
            solve problems. Tech always inspires me to find creative, scalable,
            and robust solutions for modern problems, thus making the world a
            better place. I firmly believe that we can achieve greatness if
            first, we achieve goodness.
          </p>
        </div>
      </div>
      <ScrollAnimation props={[block1, block2, block3]} />
    </section>
  );
};

export default About;
