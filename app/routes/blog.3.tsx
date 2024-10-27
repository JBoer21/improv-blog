import Paragraph from "app/components/custom/paragraph";
import BlogPhotoBand from "~/components/custom/blogPhotoBand";
import Quote from "app/components/custom/qoute";
import { blog3, qoutes } from "~/data/blog3/blog3";
import { photos } from "~/data/blog3/blog3.images";

export default function Blog3() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="w-full md:w-2/3 md:pr-8">
        <div className="p-4 mb-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            Before you write this blog, you will need to attend a live improv
            show- many students have gone as a class or in groups and made a
            night out of it. There are multiple in Baltimore and DC (Baltimore
            Improv, Highwire Improv). Be sure to jot down some notes just after
            you leave or during the break so you have them when you write. Take
            photos to document your experience (note: avoid taking pictures
            during the show unless permitted). Students have captured great
            moments with classmates and the cast after the performance and these
            can be part of your blog.
            <br />
            <br />
            Observations:
            <br />
            • Provide a general analysis of the show.
            <br />
            • Discuss how the ensemble interacted and how they did or did not
            exhibit a &quot;group mind&quot;.
            <br />
            <br />
            • Offer constructive feedback to the ensemble based on your
            observations.
            <br />
            <br />
            Insight and Reflection:
            <br />
            • Share a new insight you gained from attending the show.
            <br />• Reflect on how this insight can be applied to your own
            improv journey and your final performance.
          </p>
        </div>

        <h1 className="mb-4 text-2xl font-bold">
          Improv Show Critique and Reflection
        </h1>
        <h1 className="mb-4 text-sm text-gray-600">Adpatability</h1>
        <div className="space-y-4">
  {blog3.map((paragraph, index) => (
    <>
      <Paragraph key={index} text={paragraph} />
      {index === 9 && (
        <Quote
          text={qoutes[1].text}
          author={qoutes[1].author}
          source={qoutes[1].source}
          link={qoutes[1].link}
        />
      )}
      {index === 10 && (
        <Quote
          text={qoutes[0].text}
          author={qoutes[0].author}
          source={qoutes[0].source}
          link={qoutes[0].link}
        />
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
