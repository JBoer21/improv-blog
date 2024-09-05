import { blog1, qoutes } from "app/data/blog1/blog1";
import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "app/components/custom/blogPhotoBand";
import { photos } from "app/data/blog1/blog1.images";
import Quote from "app/components/custom/qoute";

export default function Blog1() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="w-full md:w-2/3 md:pr-8">
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
        <div className="space-y-4">
          {blog1.slice(0, 5).map((paragraph, index) => (
            <Paragraph key={index} text={paragraph} />
          ))}
        </div>
        <Quote
          text={qoutes[0].text}
          author={qoutes[0].author}
          source={qoutes[0].source}
          link={qoutes[0].link}
        />
        <Paragraph text={blog1[5]} />
        <div className="flex justify-center my-8">
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
        <div className="space-y-4">
          {blog1.slice(6, 9).map((paragraph, index) => (
            <Paragraph key={index + 6} text={paragraph} />
          ))}
        </div>
        <Quote
          text={qoutes[1].text}
          author={qoutes[1].author}
          source={qoutes[1].source}
          link={qoutes[1].link}
        />
        <div className="space-y-4">
          {blog1.slice(9, 16).map((paragraph, index) => (
            <Paragraph key={index + 9} text={paragraph} />
          ))}
        </div>
        <div className="flex justify-center my-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0VWg3ldzbLo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Paragraph text={blog1[16]} />
      </div>
      <div className="w-full mt-8 md:w-1/3 md:mt-32">
        <center>
          <BlogPhotoBand photos={photos} />
        </center>
      </div>
    </div>
  );
}
