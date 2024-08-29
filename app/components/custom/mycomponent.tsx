import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "app/components/ui/dialog";
import { Button } from "app/components/ui/button";

export function TestShadcnDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>
            This is a test dialog to check if shadcn is working correctly.
          </DialogDescription>
        </DialogHeader>
        <p>If you can see this styled dialog, shadcn is working!</p>
      </DialogContent>
    </Dialog>
  );
}
