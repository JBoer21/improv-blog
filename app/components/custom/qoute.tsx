import React from "react";

interface QuoteProps {
  text: string;
  author: string;
  source?: string;
  link?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author, source, link }) => {
  const quoteContent = (
    <>
      <span className="text-lg italic font-bold">&ldquo;{text}&rdquo;</span>
      <div className="mt-2 text-sm text-gray-600">
        - {author}
        {source && <span className="italic"> ({source})</span>}
      </div>
    </>
  );

  return (
    <div className="mx-8 my-4 md:mx-16 lg:mx-24">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline"
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
