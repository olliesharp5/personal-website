import { useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';
import throttle from 'lodash/throttle';

const useHeroAnimations = () => {
  const { scrollY } = useScroll();

  const throttledScrollY = useMemo(() => throttle((value) => value, 100), []);

  const scale = useTransform(scrollY, [0, 700], [1, 0.8], throttledScrollY);
  const y = useTransform(scrollY, [0, 700], [0, -50], throttledScrollY);

  return { scale, y };
};

export default useHeroAnimations;
