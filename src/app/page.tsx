import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchComponent from "@/features/home/components/SearchComponent";
import CardComponent from "@/shared/components/CardComponent";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="pt-12 leading-tight text-xl font-semibold">
        Your Decisions
      </h1>
      <SearchComponent />
    </div>
  );
}
