"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  data: { title: string; description: string; id: number; created_at: string };
}

export default function CardComponent({ data }: IProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`decision/${data?.id}`);
  };
  return (
    <Card
      className="w-full max-w-sm shadow-lg group hover:cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="text-sm truncate">{data?.title}</CardTitle>
        <CardDescription className="text-xs min-h-20 overflow-hidden">
          {data?.description}
        </CardDescription>
        <CardFooter className="px-0 text-[10px] text-gray-500">
          {data?.created_at}
        </CardFooter>
        <CardAction className="h-full">
          <ChevronRight className="stroke-gray-500 group-hover:stroke-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
