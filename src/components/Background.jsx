/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import Sparkle from '../assets/sparkle.png';
import '../styles/Background.css';

export function Background({ enabled }) {
  const sparkle1 = useRef();
  const sparkle2 = useRef();
  const sparkle3 = useRef();
  const sparkle4 = useRef();
  const sparkle5 = useRef();

  useEffect(() => {
    const sparkles = [sparkle1, sparkle2, sparkle3, sparkle4, sparkle5];
    const parallax = (e) => {
      const bodyParallax = document.querySelector('body');

      for (let i = 0; i < sparkles.length; i++) {
        const speed = sparkles[i].current.dataset.speed;
        const clientX = (window.innerWidth - e.pageX * speed) / 100;
        const clientY = (window.innerHeight - e.pageY * speed) / 100;
        sparkles[i].current.style.transform = `translate(${clientX}px, ${clientY}px)`;

        bodyParallax.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    if (enabled) {
      window.addEventListener('mousemove', parallax);
    }

    return () => {
      window.removeEventListener('mousemove', parallax);
    };
  }, [enabled]);

  return (
    <section>
      <img
        src={Sparkle}
        alt='sparkle'
        className='sparkle 1'
        data-speed='-5'
        ref={sparkle1}
      />
      <img
        src={Sparkle}
        alt='sparkle'
        className='sparkle 2'
        data-speed='5'
        ref={sparkle2}
      />
      <img
        src={Sparkle}
        alt='sparkle'
        className='sparkle 3'
        data-speed='2'
        ref={sparkle3}
      />
      <img
        src={Sparkle}
        alt='sparkle'
        className='sparkle 4'
        data-speed='6'
        ref={sparkle4}
      />
      <img
        src={Sparkle}
        alt='sparkle'
        className='sparkle 5'
        data-speed='8'
        ref={sparkle5}
      />
    </section>
  );
}
