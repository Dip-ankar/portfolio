import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * A custom hook for simple scroll-triggered animations.
 * @returns {object} An object containing a ref and animation props for a Framer Motion component.
 */
export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once: true` ensures animation only runs once

  const animationProps = {
    ref: ref,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return animationProps;
};