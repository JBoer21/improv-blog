import React, { useState } from "react";

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const formatDescription = (description: string): string[] => {
  const words = description.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + word).length > 27) {
      lines.push(currentLine.trim());
      currentLine = "";
    }
    currentLine += word + " ";
  }

  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  return lines;
};

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedDescription = formatDescription(description);

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
        className={`absolute inset-0 p-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} overflow-y-auto`}
      >
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        {formattedDescription.map((line, index) => (
          <p key={index} className="text-sm">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PhotoCard;
