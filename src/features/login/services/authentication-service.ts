import { request } from "@/lib/axios/request";
import { SchemaLogin } from "@/schema/login";
import { User } from "../types/user.types";
import z from "zod";
import { ApiResponse } from "@/shared/types/global.types";

export const AuthenticationService = {
  login: async (
    data: z.infer<typeof SchemaLogin>,
  ): Promise<ApiResponse<User>> => {
    return request<User>({
      method: "POST",
      url: "accounts/login",
      data,
    });
  },
};
