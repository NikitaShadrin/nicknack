"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    if (isTouchDevice) return // this is jank but i'm tired and it works fine enough, fix later?

    const handleMouseDown = () => {
        setClicking(true);
        const mark = document.createElement("div");
        mark.className = "cursor-mark";
        document.body.appendChild(mark);
        mark.style.left = `${position.x}px`;
        mark.style.top = `${position.y}px`;
        
        setTimeout(() => {
          mark.remove();
        }, 600);
      };
  

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [position, isTouchDevice]);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '20px',
        height: '20px',
        backgroundColor: 'var(--darker)',
        position: 'fixed',
        borderRadius: '50%',
        border: '2px solid var(--accent)',
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) ${clicking ? 'scale(0.8)' : 'scale(1)'}`,
        zIndex: 9999,
        transition: 'transform 0.1s ease',
      }}
    />
  );
};

export default Cursor;
