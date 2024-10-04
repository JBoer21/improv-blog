import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "~/components/custom/blogPhotoBand";
import Quote from "app/components/custom/qoute";
import { blog2part1, blog2part2, qoutes } from "~/data/blog2/blog2";
import { photos } from "~/data/blog2/blog2.images";

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
        <Quote
          text={qoutes[0].text}
          author={qoutes[0].author}
          source={qoutes[0].source}
          link={qoutes[0].link}
        />
        <br />
        <h1 className="mb-4 text-sm text-gray-600">Risk Taking</h1>
        <div className="space-y-4">
          {blog2part2.map((paragraph, index) => (
            <Paragraph key={index} text={paragraph} />
          ))}
        </div>
        <Quote
          text={qoutes[1].text}
          author={qoutes[1].author}
          source={qoutes[1].source}
          link={qoutes[1].link}
        />
        <Paragraph text = {'The first video here shows how focusing on your own funnyness means you miss oppurtunities. The second discusses how improv helps to take risks and not live in fear.'}/>
        <div className="flex justify-center my-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BQlkORSlvJk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center my-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F0J02U2iseI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full mt-8 md:w-1/3 md:mt-32">
        <center>
          <BlogPhotoBand photos={photos} />
        </center>
      </div>
    </div>
  );
}
