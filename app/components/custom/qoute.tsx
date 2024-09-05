import React from "react";

interface QuoteProps {
  text: string;
  author: string;
  link?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author, link }) => {
  const quoteContent = (
    <>
      <span className="text-lg italic font-bold">&ldquo;{text}&rdquo;</span>
      <div className="mt-2 text-sm text-gray-600">- {author}</div>
    </>
  );

  return (
    <div className="mx-8 my-4 md:mx-16 lg:mx-24">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {quoteContent}
        </a>
      ) : (
        quoteContent
      )}
    </div>
  );
};

export default Quote;
