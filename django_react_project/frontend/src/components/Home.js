import React from 'react';
import HeroSection from './home/HeroSection';
import AboutSection from './home/AboutSection';
import useHeroAnimations from '../hooks/useHeroAnimations';
import useAboutAnimations from '../hooks/useAboutAnimations';

const Home = () => {
  const { scale, y } = useHeroAnimations();
  const { aboutRef, aboutScale } = useAboutAnimations();

  return (
    <div className="content-container">
      <HeroSection scale={scale} y={y} />
      <AboutSection ref={aboutRef} scale={aboutScale} />
    </div>
  );
};

export default Home;
