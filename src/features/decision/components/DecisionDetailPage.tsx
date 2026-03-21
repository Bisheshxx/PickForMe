"use client";

import { DecisionService } from "../services/decision-services";
import BorderLessInput from "@/shared/components/BorderLessInput";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { Decision } from "../types/decision.types";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { toast } from "sonner";
import { getDateRelativeNZ } from "@/shared/lib/date-utils/date.util";
import { Badge } from "@/components/ui/badge";
import DecisionSlotComponent from "./DecisionSlotComponent";
import { Button } from "@/components/ui/button";
import { Plus, Settings } from "lucide-react";
import AddDecisionItem from "./AddDecisionItem";

interface IProps {
  id: string;
}

const SLOWDOWN_SPEED = 4; // Seconds the spin lasts

export default function DecisionDetailPage({ id }: IProps) {
  const { data, isLoading, isError } = useApiQuery({
    queryFn: () => DecisionService.getDecisionDetails(id),
    queryKey: ["decision-detail", id],
  });
  const updateDecision = useApiMutation(
    (data: Partial<Pick<Decision, "title" | "description">>) =>
      DecisionService.updateDecision(id, data),
    {
      onSuccess: (data) => console.log(data, "success"),
      onError: (error) => {
        if (error.response?.errorType === "Validation") {
          toast.error(error?.response?.message, {
            description: error?.response?.errors[0],
          });
        }
      },
      showToast: false,
      invalidateQueries: ["decision-detail", id],
    },
  );
  const mutate = async (key: string, updatedValue: string) => {
    if (key === "title" && updatedValue === "") return;
    const body = {
      title: data?.title,
      [key]: updatedValue,
    };
    await updateDecision.mutateAsync(body);
  };
  if (isLoading) return;
  if (isError) return;

  return (
    <div className="container mx-auto pt-2 px-1">
      <div className="flex justify-between">
        <div className="flex gap-3 flex-col">
          <BorderLessInput
            value={data?.title || "Untitled"}
            mutation={mutate}
            name="title"
            className="text-xl"
          />
          <BorderLessInput
            value={data?.description || "Untitled"}
            mutation={mutate}
            type="TextArea"
            name="description"
            placeholder="Add a description"
            className="md:text-sm md:w-96 text-[14px]"
          />
        </div>
        <div className="md:mt-2.5 flex flex-wrap gap-1 md:gap-2 justify-center item-end">
          {/* <Button>
            <span className="hidden md:block">Add Options</span>
            <Plus className="" />
          </Button> */}
          <AddDecisionItem />
          <Button variant={"ghost"}>
            <Settings />
          </Button>
        </div>
      </div>
      <div className="flex gap-2 mt-4 md:w-auto w-full">
        <Badge>
          Created:
          {data?.createdAt ? getDateRelativeNZ(data.createdAt) : "n/a"}
        </Badge>
        <Badge>
          Last Updated:
          {data?.updatedAt ? getDateRelativeNZ(data.updatedAt) : "n/a"}
        </Badge>
      </div>

      <DecisionSlotComponent
        options={data?.decisionItems ?? []}
        visibleItems={17}
        speed={SLOWDOWN_SPEED}
      />
    </div>
  );
}

// this is for sortable components
// https://www.diceui.com/docs/components/radix/sortable#api-reference
