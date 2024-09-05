export default function BlogIntro() {
  return (
    <div className="flex p-4">
      <div className="w-2/3 pr-8">
        <h1 className="mb-4 text-2xl font-bold">Intro</h1>
        <p className="mb-4">
          Welcome to my improv journey blog! This space is dedicated to
          documenting my experiences, reflections, and growth as I navigate
          through my improv class this semester.
        </p>
        <p className="mb-4">
          As I embark on this exciting adventure in the world of improvisation,
          I&apos;ll be sharing regular updates about:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>My thoughts and feelings as I go forward in the class</li>
          <li>New concepts I&apos;m learning</li>
          <li>Challenges I face and how I overcome them</li>
          <li>Memorable moments</li>
          <li>How improv is impacting my life outside of class</li>
        </ul>
        <p className="mb-4">This blog serves multiple purposes:</p>
        <ol className="mb-4 list-decimal list-inside">
          <li>It&apos;s a personal record of my progress and growth</li>
          <li>It&apos;s a way to reflect deeply on what I&apos;m learning</li>
          <li>
            It&apos;s a resource for others interested in improv or considering
            taking a class
          </li>
        </ol>
        <p>
          Whether you&apos;re a seasoned improviser, a curious beginner, or just
          someone interested in following along with my journey, I hope
          you&apos;ll find value in these reflections. Join me as I learn to
          think on my feet, embrace spontaneity, and discover the joy of saying
          &quot;Yes, and...&quot;!
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
