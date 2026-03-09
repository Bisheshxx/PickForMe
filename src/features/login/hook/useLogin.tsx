"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAction } from "../Actions/actions";
import { AuthenticationService } from "../services/authentication-service";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const route = useRouter();

  return useMutation({
    mutationFn: loginAction,
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["profile"] });
      if (data.success) {
        route.push("/");
      }
    },
  });
};
