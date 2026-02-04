import { useState, useEffect, useRef, useCallback } from 'react';

function useValueAnimation(ref, end, duration) {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameId = useRef(null);
  const startTimeRef = useRef(null);

  const animate = useCallback((timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
    setValue(Math.floor(progress * end));
    if (progress < 1) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  }, [end, duration]);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isVisible, animate]);

  return value;
}

export default useValueAnimation;
