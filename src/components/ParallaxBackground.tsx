import React, { useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const { offsetX: mouseX, offsetY: mouseY } = e.nativeEvent;

    // Calculate the cursor's position relative to the center
    const x = (mouseX / clientWidth - 0.5) * 2; // Range: -1 to 1
    const y = (mouseY / clientHeight - 0.5) * 2;

    const maxOffset = 20; // Maximum offset in pixels
    setOffsetX(x * maxOffset);
    setOffsetY(y * maxOffset);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
         <div
        className="absolute"
        style={{
          top: `calc(0% + ${offsetY}px)`,
          left: `calc(50% + ${offsetX}px)`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg
          width="50"
          height="100"
          viewBox="0 0 50 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="30" rx="20" ry="30" fill="red" />
          <line
            x1="25"
            y1="60"
            x2="25"
            y2="100"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      {/* <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("https://cogtoolslab.github.io/images/people/VermaA_photo.jpeg")',
          backgroundPosition: `${50 + offsetX}% ${50 + offsetY}%`,
        }}
      >
      </div> */}
    </div>
  );
};

export default ParallaxBackground;
