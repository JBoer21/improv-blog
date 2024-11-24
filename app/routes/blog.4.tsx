import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "~/components/custom/blogPhotoBand";
import Quote from "app/components/custom/qoute";
import { blog4, qoutes } from "~/data/blog4/blog4";
import { photos } from "~/data/blog3/blog3.images";
import React from "react";

export default function Blog4() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="w-full md:w-2/3 md:pr-8">
        <div className="p-4 mb-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            Right after our final presentation, MC gave us the chance to write
            our final blog as a reflection on our final presentation. I took
            this oppurtunity.
          </p>
        </div>
        <h1 className="mb-4 text-2xl font-bold">
          Final Improv Show Reflection
        </h1>
        <div className="space-y-4">
          {blog4.map((paragraph, index) => (
            <React.Fragment key={index}>
              <Paragraph text={paragraph} />
              {index === 3 && (
                <Quote
                  text={qoutes[1].text}
                  author={qoutes[1].author}
                  source={qoutes[1].source}
                  link={qoutes[1].link}
                />
              )}
              {index === 4 && (
                <Quote
                  text={qoutes[0].text}
                  author={qoutes[0].author}
                  source={qoutes[0].source}
                  link={qoutes[0].link}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <br />
        <div className="flex justify-center my-8"></div>
        <div className="flex justify-center my-8"></div>
      </div>
      <div className="w-full mt-8 md:w-1/3 md:mt-32">
        <center>
          <BlogPhotoBand photos={photos} />
        </center>
      </div>
    </div>
  );
}
