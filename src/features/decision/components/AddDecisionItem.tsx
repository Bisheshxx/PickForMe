import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { SchemaCreateDecisionItem } from "../Schema/decision-item.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomDialog from "@/shared/components/CustomDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AddDecisionItem() {
  return (
    <CustomDialog
      button={
        <Button>
          <span className="hidden md:block">Add Options</span>
          <Plus className="" />
        </Button>
      }
      title={"Add Options"}
      description="This is where you add options"
      width="max-w-sm sm:max-w-sm"
      dialogName="create-decision-items"
    >
      test
    </CustomDialog>
  );
}
