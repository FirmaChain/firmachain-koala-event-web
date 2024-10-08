import React, { useEffect, useState, useRef, useCallback } from 'react';
import { KOA, MessageBox } from './styles';

const getRandomPosition = (width: number, height: number) => {
  const x = Math.random() * (window.innerWidth - width);
  const y = Math.random() * (window.innerHeight - height);
  return { x, y };
};

const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const FloatingKOA = ({ handleClick }: { handleClick: () => void }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const koaRef = useRef<HTMLDivElement>(null);

  const moveKOA = useCallback(() => {
    const newPosition = getRandomPosition(178, 98);
    const distance = getDistance(position.x, position.y, newPosition.x, newPosition.y);
    const speed = 240;
    const newDuration = distance / speed;

    setPosition(newPosition);
    setDuration(newDuration);
  }, [position]);

  useEffect(() => {
    if (koaRef.current) {
      const { width, height } = koaRef.current.getBoundingClientRect();
      const initialPosition = getRandomPosition(width, height);
      setPosition(initialPosition);
    }
  }, []);

  useEffect(() => {
    if (paused) {
      setDuration(0);
      return;
    }

    const timeout = window.setTimeout(() => moveKOA(), duration * 1000 + 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [moveKOA, duration, paused]);

  const handleMouseEnter = () => {
    setPaused(true);
    setShowMessageBox(true);
    if (koaRef.current) {
      const { top, left } = koaRef.current.getBoundingClientRect();
      setPosition({ x: left, y: top });
    }
  };

  const handleMouseLeave = () => {
    setPaused(false);
    setShowMessageBox(false);
  };

  return (
    <React.Fragment>
      <KOA
        ref={koaRef}
        $top={position.y}
        $left={position.x}
        $duration={duration}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick()}
      />
      {showMessageBox && <MessageBox $top={position.y - 46} $left={position.x + 18} />}
    </React.Fragment>
  );
};

export default React.memo(FloatingKOA);
