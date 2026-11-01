import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: A high-performance, GPU-accelerated reveal component
 * that triggers smooth slide-up and fade-in animations as elements enter the viewport.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  distance = 36,
  duration = 750,
  threshold = 0.1,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, show immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [threshold, once]);

  // Compute transform based on direction
  const getTransform = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={domRef}
      className={`scroll-reveal-box ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
