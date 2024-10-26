import { useScroll, useTransform } from 'framer-motion';

const useHeroAnimations = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 0.8]);
  const y = useTransform(scrollY, [0, 700], [0, -50]);

  return { scale, y };
};

export default useHeroAnimations;
