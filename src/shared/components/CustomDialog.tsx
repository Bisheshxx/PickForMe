import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

interface IProps {
  button: React.ReactNode;
  width?: number;
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function CustomDialog({
  button,
  width = 425,
  title,
  description,
  children,
  footer,
}: IProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className={`sm:max-w-[${width}px]`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {footer}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
