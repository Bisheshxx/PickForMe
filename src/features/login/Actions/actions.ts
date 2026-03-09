"use server";
import { AuthenticationService } from "../services/authentication-service";

export async function loginAction(data: any) {
  const response = await AuthenticationService.login(data);
  return response;
}
