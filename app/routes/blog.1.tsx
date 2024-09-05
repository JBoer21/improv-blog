import { blog1 } from "app/data/blog1/blog1";
import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "app/components/custom/blogPhotoBand";
import { photos } from "app/data/blog1/blog1.images";

export default function Blog1() {
  return (
    <div className="flex p-4">
      <div className="w-2/3 pr-8">
        <div className="p-4 mb-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            Prompt #1: Describe your initial impressions of improvisation after
            the first few weeks of class, including what excites and makes you
            nervous. Choose two rules from the{" "}
            <a
              href="https://improvclassesandcoaching.com/ultimate-guide-to-improv-101-improv-tips/"
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noreferrer"
            >
              provided list
            </a>{" "}
            that you feel can integrate improvisation into your everyday life
            and discuss their potential impact.
          </p>
        </div>
        <h1 className="mb-4 text-2xl font-bold">
          First Impressions, Excitement, and Nerves
        </h1>
        {blog1.slice(0, 6).map((paragraph, index) => (
          <Paragraph key={index} text={paragraph} />
        ))}
        <div className="flex justify-center mt-8 mb-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o3d1yb90LoY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8">
          {blog1.slice(6).map((paragraph, index) => (
            <Paragraph key={index + 5} text={paragraph} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <iframe
            width="50%"
            height="400"
            src="https://www.youtube.com/embed/0VWg3ldzbLo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-1/3 mt-32">
        <center>
          <BlogPhotoBand photos={photos} />
        </center>
      </div>
    </div>
  );
}
