import React from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className="mb-4 indent-8">{text}</p>;
};

export default Paragraph;
