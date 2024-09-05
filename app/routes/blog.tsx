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
      <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
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
              <TooltipContent side="right">Home</TooltipContent>
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
              <TooltipContent side="right">Intro</TooltipContent>
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
              <TooltipContent side="right">Blog 1</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
