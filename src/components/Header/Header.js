import React, {useEffect, useState} from 'react';
import Wave from './Wave'
import '../sass/layout/_header.scss'
import linkedIn from '../../img/linked.svg'
import git from '../../img/github.svg'
import insta  from '../../img/insta.svg'  

const Header = () => {
    const [state, setState]=useState('initial')
    useEffect(() => {
        function  handleWindowMouseMove(){
            if(window.scrollY > 10){
                setState('fixed')
            }
            else{
                setState('initial')
            }
        }
        window.addEventListener('scroll', handleWindowMouseMove);
        return () => window.removeEventListener('scroll', handleWindowMouseMove);
    }, []);
    return (
        <div>
            <div className="header">
            <nav 
                className={`header__nav ${state!=='fixed'?"header__nav--initial":"header__nav--fixed"}`}
            >
            <svg id="Capa_1" 
                className="header__nav--svg"
                enable-background="new 0 0 512 512" 
                height="512" 
                width="512" 
                viewBox="0 0 512 512" 
                xmlns="http://www.w3.org/2000/svg">
                <g id="P_1_">
                    <g>
                        <path d="m185.889 512h-124.889v-512h167.271c59.515 0 97.708 2.527 116.758 7.724 60.696 16.255 105.971 72.076 105.971 154.943 0 85.959-50.245 144.29-116.571 159.035l-.281.06c-23.86 4.827-57.025 7.174-101.389 7.174h-46.87zm-94.889-30h64.889v-183.064h76.87c41.663 0 73.725-2.203 95.298-6.549 44.958-10.054 92.943-49.395 92.943-129.72 0-63.882-32.097-112.152-83.765-125.973l-.08-.021c-11.134-3.045-39.062-6.673-108.884-6.673h-137.271zm64.889-234.26v-166.701c16.702.117 10.714.261 38.468.178 32.9-.101 73.841-.226 93.435 3.518 38.124 7.067 65.435 37.3 65.435 79.242 0 34.441-18.634 62.417-49.846 74.837-22.802 9.085-68.682 8.792-105.55 8.555-31.202-.199-25.026.141-41.942.371zm30-30.432c3.887.01 7.962.036 12.133.063 30.624.196 76.901.492 94.258-6.427 19.661-7.824 30.946-24.945 30.946-46.967 0-31.105-21.148-46.095-40.939-49.751l-.099-.019c-16.733-3.208-59.464-3.077-87.74-2.99-2.987.009-5.844.018-8.56.023v106.068z"/>
                    </g>
                </g>
            </svg>
                <ul className="header__nav--list">
                    <li className="header__nav--items">Home</li>
                    <li className="header__nav--items">About</li>
                    <li className="header__nav--items">Projects</li>
                </ul>
            </nav>
                <div className={`header__content ${state==='fixed'?'padding-offset':''}`}>
                <h1 class="heading__primary">
                    <div id="animateName">
                        <span class="heading__primary--main">Pranjal Misra</span>
                    </div> 
                    <span class="heading__primary--sub">Software Engineer</span>
            <div class="heading__primary--icons"id="animateSocial" >
                <span class="heading__primary--icon">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/PranjalMisra12">
                        <img src={linkedIn} alt="LinkedIn Profile" />
                    </a>
                </span>
                <span class="heading__primary--icon">
                    <a  target="_blank" rel="noreferrer" href="https://github.com/Pranjal-dev-byte">
                        <img src={git} alt="LinkedIn Profile"/>
                    </a>
                </span>
                <span class="heading__primary--icon">
                    <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/misra_pranjal_">
                        <img src={insta} alt="LinkedIn Profile" />
                    </a>
                </span>
            </div>
            <button class="btn btn-resume u-margin-medium-top" id="animateSocial">
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1nCODWuXSJ7XEsrvIuGeJsmMMitustSSa/view?usp=sharing" class="header__resume">Resume</a> 
            </button>
            </h1>
        </div>
            <Wave/>
        </div>    
    </div>    
    )
}

export default Header
