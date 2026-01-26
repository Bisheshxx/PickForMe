import { Button } from "@/components/ui/button";
import CustomDialog from "@/shared/components/CustomDialog";
import { Plus } from "lucide-react";

export function CreateDecisionDialog() {
  return (
    <CustomDialog
      button={
        <Button className="h-6 text-xs leading-tight min-w-1 px-1 py-1 sm:px-3 ">
          <Plus />
          <span className="hidden md:block">New Decision</span>
        </Button>
      }
      title="New Decision"
      description="Blah blah"
      footer={<Button type="submit">Save changes</Button>}
    >
      test
    </CustomDialog>
  );
}
