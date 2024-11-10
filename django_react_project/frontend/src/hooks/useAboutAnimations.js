import { useRef, useMemo } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import throttle from 'lodash/throttle';

const useAboutAnimations = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const throttledScrollYProgress = useMemo(() => throttle((value) => value, 100), []);

  const aboutScale = useTransform(aboutScrollYProgress, [0, 1], [0.6, 1.2], throttledScrollYProgress);

  return { aboutRef, aboutScale };
};

export default useAboutAnimations;
