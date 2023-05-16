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
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: '-20px',
        top: '-20px',
        width: '40px',
        height: '40px',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
