import React, { useState, useEffect } from 'react';
// import Particles from 'react-tsparticles';
// import { loadFountainPreset } from "tsparticles-preset-fountain";
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
  // const customInit=(engine)=> {
  //   // this adds the preset to tsParticles, you can safely use the
  //   // console.log(engine)
  //   loadFountainPreset(engine);
  // }
  // const options = {
  //   preset: "fountain",
  // };
  const [isLoading, setIsLoading] = useState(true)
	setTimeout(()=>{
		setIsLoading(false)
	},5000)
  return (
    <div>
      <div className="header">
      {/* <Particles className="header__particles" options={options} init={customInit} /> */}
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
