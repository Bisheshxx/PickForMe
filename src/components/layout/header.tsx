"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { Button } from "../ui/button";
import { AuthenticationService } from "@/features/auth/services/authentication-service";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const routeToLogin = () => {
    router.push("/login");
  };
  const Logout = useApiMutation(AuthenticationService.logout, {
    onSuccess: routeToLogin,
    onError: routeToLogin,
  });
  const handleLogout = async () => {
    await Logout.mutate({});
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
