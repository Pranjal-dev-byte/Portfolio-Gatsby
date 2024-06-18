import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFountainPreset } from "tsparticles-preset-fountain";
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';
import HeaderSkeleton from './HeaderSkeleton';

const Header = (props) => {
  const [state, setState] = useState('initial');
  useEffect(() => {
    function handleWindowMouseMove() {
      window.scrollY > 10 ? setState('fixed') : setState('initial');
    }
    window.addEventListener('scroll', handleWindowMouseMove);
    return () => window.removeEventListener('scroll', handleWindowMouseMove);
  }, []);
   // this customizes the component tsParticles installation
  const customInit=(engine)=> {
    // this adds the preset to tsParticles, you can safely use the
    // console.log(engine)
    loadFountainPreset(engine);
  }
  const options = {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ADD8E6"
        },
        "fullScreen": {
          "enable": false,
          "zIndex": -1,
          },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 7,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
        "interactivity": {
          "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
      },
      "retina_detect": true
    }
  };
  const [isLoading, setIsLoading] = useState(true)
	setTimeout(()=>{
		setIsLoading(false)
	},5000)
  return (
    <div>
      <div className="header">
      <Particles className="header__particles" options={options} init={customInit} />
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
            {isLoading?<HeaderSkeleton />:<HeaderMain />}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
