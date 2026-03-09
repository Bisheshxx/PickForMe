import SearchComponent from "@/features/home/components/SearchComponent";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="pt-12 leading-tight text-xl font-semibold">
        Decision Maker
      </h1>
      <SearchComponent />
    </div>
  );
}
