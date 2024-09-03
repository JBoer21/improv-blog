import React, { useEffect, useRef } from "react";

interface PhotoBandProps {
  photos: string[];
  speed?: number;
}

const PhotoBand: React.FC<PhotoBandProps> = ({ photos, speed = 1 }) => {
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;

    let position = 0;
    const movePhotos = () => {
      position -= speed;
      band.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= band.offsetWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(movePhotos);
    };

    movePhotos();
  }, [speed]);

  return (
    <div className="w-full py-32 overflow-hidden">
      {" "}
      {/* Decreased top and bottom padding */}
      <div ref={bandRef} className="flex whitespace-nowrap">
        {photos.concat(photos).map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Band ${index + 1}`}
            className="object-cover w-auto h-40 mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoBand;
