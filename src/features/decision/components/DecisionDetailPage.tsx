"use client";

import { DecisionService } from "../services/decision-services";
import { ChangeEvent, useState } from "react";
import BorderLessInput from "@/shared/components/BorderLessInput";
import { useApiQuery } from "@/shared/hooks/useApiQuery";

interface IProps {
  id: string;
}

export default function DecisionDetailPage({ id }: IProps) {
  const [draftTitle, setDraftTitle] = useState<string | null>(null);
  const { data, meta } = useApiQuery({
    queryFn: () => DecisionService.getDecisionDetails(id),
    queryKey: ["decision-detail", id],
  });

  const originalTitle = data?.title ?? "";
  const title = draftTitle ?? originalTitle;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDraftTitle(e.target.value);
  };

  console.log(meta);

  return (
    <div className="container mx-auto pt-2">
      <div className="flex gap-3 flex-col">
        <BorderLessInput value={title} onChangeHandler={onChangeHandler} />
        <p>{data?.description}</p>
        {/* {isTitleDirty && <Button variant={"ghost"}>Update</Button>} */}
      </div>
    </div>
  );
}

// this is for sortable components
// https://www.diceui.com/docs/components/radix/sortable#api-reference
