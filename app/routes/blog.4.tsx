import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "~/components/custom/blogPhotoBand";
import Quote from "app/components/custom/qoute";
import { blog3, qoutes } from "~/data/blog3/blog3";
import { blog4 } from "~/data/blog4/blog4";
import { photos } from "~/data/blog3/blog3.images";

export default function Blog4() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="w-full md:w-2/3 md:pr-8">
        <div className="p-4 mb-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            Right after our final presentation, MC gave us the chance to write our final blog as a reflection on
            our final presentation. I took this oppurtunity.
          </p>
        </div>

        <h1 className="mb-4 text-2xl font-bold">
          Improv Show Critique and Reflection
        </h1>
        <div className="space-y-4">
  {blog3.map((paragraph, index) => (
    <>
      <Paragraph key={index} text={paragraph} />
      {index === 9 && (
        <div>
        <Quote
          text={qoutes[1].text}
          author={qoutes[1].author}
          source={qoutes[1].source}
          link={qoutes[1].link}
        />
        <h1 className="mb-4 text-sm text-gray-600">Here is quick video outlining how to avoid questions and ask statements</h1>
        <div className="flex justify-center my-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7nD8MPsCfm0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
      )}
      {index === 10 && (
        <div>
        <Quote
          text={qoutes[0].text}
          author={qoutes[0].author}
          source={qoutes[0].source}
          link={qoutes[0].link}
        />
                <h1 className="mb-4 text-sm text-gray-600">Provided are some instructions on how to create improv characters. I can certainly use this advice instead of just going with the same 2 or 3 character types each time</h1>
        <div className="flex justify-center my-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3FbxzPxEEdA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
      )}
    </>
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
