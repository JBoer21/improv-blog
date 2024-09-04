import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    message: "Hello from Blog 1!",
  });
};

export default function Blog1() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Blog 1</h1>
      <p>{data.message}</p>
    </div>
  );
}
