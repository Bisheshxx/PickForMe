"use client";
import { use } from "react";

export default function DecisionPage({ params }: PageProps<"/decision/[id]">) {
  const { id } = use(params);
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
