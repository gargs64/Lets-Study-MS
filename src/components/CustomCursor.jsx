import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="cursor-dot shadow-[0_0_10px_rgba(var(--primary),0.5)]"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.5)' : 'scale(1)'}`
        }}
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.2)' : 'scale(1)'}`,
          borderColor: isPointer ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.3)',
          borderWidth: isPointer ? '2px' : '1px',
          boxShadow: isPointer ? '0 0 15px hsl(var(--primary) / 0.2)' : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
