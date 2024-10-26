import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const useAboutAnimations = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutScale = useTransform(aboutScrollYProgress, [0, 1], [0.6, 1.2]);

  return { aboutRef, aboutScale };
};

export default useAboutAnimations;
