import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';

const Header = (props) => {
  const [state, setState] = useState('initial');
  useEffect(() => {
    function handleWindowMouseMove() {
      window.scrollY > 10 ? setState('fixed') : setState('initial');
    }
    window.addEventListener('scroll', handleWindowMouseMove);
    return () => window.removeEventListener('scroll', handleWindowMouseMove);
  }, []);
  return (
    <div>
      <div className="header">
        <Particles
          className="header__particles"
          params={{
            particles: {
              number: {
                value: 350,
                density: {
                  enable: true,
                  value_area: 1803.4120608655228,
                },
              },
              color: {
                value: '#5287FB',
              },
              opacity: {
                value: 0.8008530152163807,
                random: false,
                anim: {
                  enable: true,
                  speed: 3,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 90,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 1,
                color: '#000000',
                opacity: 1,
                width: 9,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'top',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: false,
                  mode: 'bubble',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 60,
                  duration: 4,
                  opacity: 8,
                  speed: 10,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <nav
          className={`header__nav ${
            state !== 'fixed' ? 'header__nav--initial' : 'header__nav--fixed'
          }`}
        >
          <Navbar props={props.refProps} />
        </nav>
        <div
          className={`header__content ${
            state === 'fixed' ? 'padding-offset' : ''
          }`}
        >
          <h1 className="heading__primary">
            <HeaderMain />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
