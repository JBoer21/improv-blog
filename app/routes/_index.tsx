import type { MetaFunction } from "@remix-run/node";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "app/components/ui/hover-card";
import { Button } from "app/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Jehan's Improv Journey" },
    { name: "description", content: "Follow Jehan&apos;s journey in improv" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-black mb-8 p-6">
        Jehan&apos;s Improv Journey
      </h1>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Blog Posts</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <ul className="space-y-2">
            <li>
              <a href="/post1" className="text-blue-600 hover:underline">
                My First Improv Class
              </a>
            </li>
            <li>
              <a href="/post2" className="text-blue-600 hover:underline">
                Learning to &quot;Yes, And&quot;
              </a>
            </li>
            <li>
              <a href="/post3" className="text-blue-600 hover:underline">
                Performing in My First Show
              </a>
            </li>
            {/* Add more blog post links as needed */}
          </ul>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
