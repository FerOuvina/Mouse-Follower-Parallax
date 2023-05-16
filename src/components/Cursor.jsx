/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export function Cursor({ enabled }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Toggle mouse follow
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    const getDiv = document.querySelector('.cursor');
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
      getDiv.style.display = 'flex';
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
      getDiv.style.display = 'none';
    };
  }, [enabled]);

  return (
    <div
      className='cursor'
      style={{
        display: 'none',
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: '30px',
        top: '15px',
        width: '40px',
        height: '40px',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
