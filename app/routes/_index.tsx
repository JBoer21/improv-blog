import type { MetaFunction } from "@remix-run/node";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "app/components/ui/navigation-menu";
import PhotoBand from "app/components/custom/photoBand";
import { photos } from "app/data/landing/band_images";
export const meta: MetaFunction = () => {
  return [
    { title: "Jehan's Improv Journey" },
    { name: "description", content: "Follow Jehan&apos;s journey in improv" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center flex-grow p-4 font-sans">
        <main className="text-5xl font-bold md:text-6xl">
          <br></br>
          <h1 className="mb-8 text-center">
            <span className="inline pr-1">Jehan&apos;s</span>
            <br />
            <span className="inline bg-gradient-to-r from-[#385368] to-[#1499d6] text-transparent bg-clip-text pr-1">
              Improv
            </span>
            <span className="inline bg-gradient-to-r from-[#63b858] to-[#1b805d] text-transparent bg-clip-text">
              Journey
            </span>
          </h1>
        </main>
        <div className="flex space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold">
                  Blogs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-3 space-y-3" style={{ width: "100px" }}>
                    <ul className="space-y-1">
                      <li>
                        <a
                          href="/blog/intro"
                          className="block p-2 -m-2 text-sm transition-colors rounded-md hover:bg-slate-100"
                        >
                          Intro
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog/1"
                          className="block p-2 -m-2 text-sm transition-colors rounded-md hover:bg-slate-100"
                        >
                          Blog 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog/2"
                          className="block p-2 -m-2 text-sm transition-colors rounded-md hover:bg-slate-100"
                        >
                          Blog 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <PhotoBand photos={photos} speed={0.5} />
      </div>
    </div>
  );
}
