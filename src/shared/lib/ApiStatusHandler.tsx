import { Button } from "@/components/ui/button";
import { Loader2, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: string;
  children: React.ReactElement | string;
}
export function ApiStatusHandler({
  isLoading,
  isError,
  isSuccess,
  error,
  children,
  ...props
}: IProps & React.ComponentProps<"div">) {
  const router = useRouter();
  if (isLoading)
    return (
      <div {...props}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Loader2 className="animate-spin" size={40} />
          <span>Loading</span>
        </div>
      </div>
    );
  if (isError)
    return (
      <div {...props} role="alert">
        <div className="flex flex-col items-center justify-center gap-5">
          <TriangleAlert size={100} color="red" />
          <p className="text-xl font-extralight">
            {error || "An unexpected Error Occurred"}
          </p>
          <Button variant={"destructive"} onClick={() => router.push("/login")}>
            Back to Login
          </Button>
        </div>
      </div>
    );
  if (isSuccess) return <div {...props}>{children}</div>;
  return null;
}
