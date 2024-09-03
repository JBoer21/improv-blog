import React, { useEffect, useRef, useState } from "react";
import PhotoCard from "./photoCard";

interface PhotoBandProps {
  photos: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
  speed?: number;
}

const PhotoBand: React.FC<PhotoBandProps> = ({ photos, speed = 1 }) => {
  const bandRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;

    let animationFrameId: number;

    const movePhotos = (currentTime: number) => {
      if (lastTimeRef.current !== 0) {
        const deltaTime = currentTime - lastTimeRef.current;
        if (!isHovered) {
          positionRef.current -= speed * (deltaTime / 16); // Adjust speed based on time passed
          band.style.transform = `translateX(${positionRef.current}px)`;

          if (Math.abs(positionRef.current) >= band.offsetWidth / 2) {
            positionRef.current = 0;
          }
        }
      }

      lastTimeRef.current = currentTime;
      animationFrameId = requestAnimationFrame(movePhotos);
    };

    animationFrameId = requestAnimationFrame(movePhotos);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, isHovered]);

  return (
    <div className="w-full py-32 overflow-hidden">
      <div
        ref={bandRef}
        className="flex whitespace-nowrap"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {photos.concat(photos).map((photo, index) => (
          <div key={index} className="mx-2">
            <PhotoCard
              imageUrl={photo.imageUrl}
              title={photo.title}
              description={photo.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBand;
