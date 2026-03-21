import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { SchemaCreateDecisionItem } from "../Schema/decision-item.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateDecisionItemForm() {
  const form = useForm<z.infer<typeof SchemaCreateDecisionItem>>({
    resolver: zodResolver(SchemaCreateDecisionItem),
    defaultValues: {
      title: "",
    },
  });

  const handleCreate = async (
    data: z.infer<typeof SchemaCreateDecisionItem>,
  ) => {
    console.log(data);
  };
  return <div></div>;
}
