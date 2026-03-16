import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function SearchInput() {
  return (
    <div className="relative">
      <Input
        className="md:w-[230px] w-[150px] text-xs md:text-xs h-[26px] pl-7"
        placeholder="Search for a decision"
      />
      <Search size={20} className="absolute top-0 h-[26px] pl-2" />
    </div>
  );
}
