import { Link, Outlet, useLocation } from "@remix-run/react";
import { Home } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "~/components/ui/tooltip";

export default function Blog() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-accent text-accent-foreground"
      : "text-muted-foreground hover:text-foreground";
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <aside className="z-10 flex flex-row border-b sm:flex-col sm:border-r bg-background sm:fixed sm:inset-y-0 sm:left-0 sm:w-14">
        <nav className="flex flex-row items-center w-full gap-4 px-2 py-2 sm:flex-col sm:py-5 sm:w-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${isActive("/")}`}
                >
                  <Home className="w-5 h-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:side-right">
                Home
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/blog/intro"
                  className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${isActive("/blog/intro")}`}
                >
                  <span className="text-sm font-medium">i</span>
                  <span className="sr-only">Intro</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:side-right">
                Intro
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/blog/1"
                  className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${isActive("/blog/1")}`}
                >
                  <span className="text-sm font-medium">B1</span>
                  <span className="sr-only">Blog 1</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:side-right">
                Blog 1
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/blog/2"
                  className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${isActive("/blog/2")}`}
                >
                  <span className="text-sm font-medium">B2</span>
                  <span className="sr-only">Blog 2</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:side-right">
                Blog 2
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/blog/3"
                  className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 md:h-8 md:w-8 ${isActive("/blog/2")}`}
                >
                  <span className="text-sm font-medium">B3</span>
                  <span className="sr-only">Blog 3</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="sm:side-right">
                Blog 3
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:pl-14">
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
