import React, { Suspense } from 'react';
import useHeroAnimations from '../hooks/useHeroAnimations';
import useAboutAnimations from '../hooks/useAboutAnimations';

const HeroSection = React.lazy(() => import('./home/HeroSection'));
const AboutSection = React.lazy(() => import('./home/AboutSection'));

const Home = () => {
  const { scale, y } = useHeroAnimations();
  const { aboutRef, aboutScale } = useAboutAnimations();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="content-container">
        <HeroSection scale={scale} y={y} />
        <AboutSection ref={aboutRef} scale={aboutScale} />
      </div>
    </Suspense>
  );
};

export default Home;
