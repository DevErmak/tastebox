import React, { useRef, useEffect, useState } from 'react';
import './snow.scss';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const Snow: React.FC = () => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const [countSnow, setCountSnow] = useState(window.scrollY / 100 + 20);
  const handleCountSnow = () => {
    setCountSnow(window.scrollY / 100 + 20);
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext('2d');
    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;
    let snowflakes: Snowflake[] = [];
    const numSnowflakes = Math.floor(countSnow);

    for (let i = 0; i < numSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        radius: Math.random() * 5 + 2,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 + 1,
        color: getRandomColor(),
      });
    }

    const drawSnowflakes = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      snowflakes.forEach((snowflake) => {
        ctx!.beginPath();
        ctx!.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx!.fillStyle = snowflake.color;
        ctx!.fill();
        ctx!.closePath();
      });
    };

    const updateSnowflakes = () => {
      snowflakes.forEach((snowflake) => {
        snowflake.x += snowflake.speedX;
        snowflake.y += snowflake.speedY;

        if (snowflake.y >= canvas!.height) {
          snowflake.x = Math.random() * canvas!.width;
          snowflake.y = 0;
          snowflake.radius = Math.random() * 5 + 2;
          snowflake.speedY = Math.random() * 1 + 0.5;
          snowflake.color = getRandomColor();
        }
      });
    };

    const animateSnowflakes = () => {
      drawSnowflakes();
      updateSnowflakes();
      requestAnimationFrame(animateSnowflakes);
    };

    animateSnowflakes();
    window.addEventListener('scroll', handleCountSnow);

    return () => {
      window.removeEventListener('scroll', handleCountSnow);
    };
  }, [countSnow]);

  return <canvas ref={canvasRef} className={'snow-canvas'} />;
};
