export default function BlogIntro() {
  return (
    <div className="flex p-4">
      <div className="w-2/3 pr-8">
        <h1 className="mb-4 text-2xl font-bold">
          Welcome to My Improv Journey Blog
        </h1>
        <p className="mb-4">
          Hello and welcome! This blog is my digital journal, created to
          document and share my semester-long adventure in the world of
          improvisation.
        </p>
        <p className="mb-4">
          My goal is to take you along on this journey with me. Whether
          you&apos;re an improv enthusiast, a curious beginner, or someone
          who&apos;s never even heard of &quot;Yes, and...&quot;, I&apos;ll be
          explaining concepts, sharing my thoughts, and reflecting on my
          experiences in a way that&apos;s accessible to everyone.
        </p>
        <p className="mb-4">
          Throughout the semester, you can expect to find posts about:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>New improv concepts I&apos;m learning</li>
          <li>
            My personal thoughts and feelings as I progress through the class
          </li>
          <li>Challenges I encounter</li>
          <li>Memorable moments</li>
          <li>How improv is influencing my life beyond the classroom</li>
        </ul>
        <p className="mb-4">This blog serves multiple purposes:</p>
        <ol className="mb-4 list-decimal list-inside">
          <li>It&apos;s a personal record of my progress and growth</li>
          <li>
            It&apos;s a platform for deep reflection on what I&apos;m learning
          </li>
          <li>
            It&apos;s a resource for others interested in improv or considering
            taking a class
          </li>
          <li>It&apos;s an invitation for you to learn alongside me</li>
        </ol>
        <p className="mb-4">
          I&apos;ve chosen to host this blog on a free platform, making it
          easily accessible to anyone interested in following along. As we
          progress through the semester together, I&apos;ll be doing more than
          just answering prompts – I&apos;ll be reflecting deeply on my
          experiences and applying what I learn in ways that I hope will be
          insightful and useful for you too.
        </p>
        <p>
          Whether you&apos;re here out of curiosity, share an interest in
          improv, or simply want to follow along as I navigate the world of
          spontaneous performance, I appreciate your presence. I hope
          you&apos;ll find value in this journey as we explore the art of
          improvisation together.
        </p>
      </div>
      <div className="w-1/3 mt-32">
        <center>
          {/* BlogPhotoBand component will be added here when photos are available */}
        </center>
      </div>
    </div>
  );
}
