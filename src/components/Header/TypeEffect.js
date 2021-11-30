import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TypeEffect = () => {
  let text = useRef(null);
  useEffect(() => {
    const words = [
      "Web Developer",
      "Full Stack Developer",
      "Software Engineer",
      "Can bring your product to life",
    ];
    let masterTL = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
      tl.to(text.current, { duration: 1.5, text: word });
      masterTL.add(tl);
    });
  }, []);
  return (
    <span ref={text} className="heading__primary--sub">
      &nbsp;
    </span>
  );
};

export default TypeEffect;
