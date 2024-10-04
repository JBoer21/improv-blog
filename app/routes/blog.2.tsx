import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "app/components/custom/blogPhotoBand";
import Quote from "app/components/custom/qoute";
import { blog2part1 } from "~/data/blog2/blog2";

export default function Blog2() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="w-full md:w-2/3 md:pr-8">
        <div className="p-4 mb-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            1. Reflection on Adaptability:
            <br />
            Think of a time when you struggled to adapt to a situation. Describe
            the experience, how you responded, and how the principles of improv
            could have helped you be more flexible.
            <br />
            <br />
            2. Risk-Taking Experience:
            <br />
            Share a story where you took a significant risk. Discuss what you
            learned from the experience and how it aligns with the principles of
            improv.
          </p>
        </div>
        <h1 className="mb-4 text-2xl font-bold">
          Adpatability and Risk Taking
        </h1>
        <h1 className="mb-4 text-sm text-gray-600">Adpatability</h1>
        <div className="space-y-4">
          {blog2part1.map((paragraph, index) => (
            <Paragraph key={index} text={paragraph} />
          ))}
        </div>
      </div>
      <div className="w-full mt-8 md:w-1/3 md:mt-32">
        <center>{/* <BlogPhotoBand photos={photos} /> */}</center>
      </div>
    </div>
  );
}
