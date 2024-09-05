import PhotoCard from "./photoCard";

import React from "react";

interface BlogPhotoBandProps {
  photos: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
}

const BlogPhotoBand: React.FC<BlogPhotoBandProps> = ({ photos }) => {
  return (
    <div className="flex flex-col space-y-72">
      {photos.map((photo, index) => (
        <div key={index} className="w-full">
          <PhotoCard
            imageUrl={photo.imageUrl}
            title={photo.title}
            description={photo.description}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogPhotoBand;
