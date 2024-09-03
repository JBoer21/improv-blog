import React, { useState } from "react";

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-20" : "opacity-100"}`}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
