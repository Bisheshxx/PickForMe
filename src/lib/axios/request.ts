"use server";
import { api } from "@/lib/axios/api";
import { ApiResponse } from "@/shared/types/global.types";
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions<TRequest = Record<string, unknown>> {
  method: HttpMethod;
  url: string;
  data?: TRequest; // for POST/PUT
  params?: Record<string, unknown>;
  config?: AxiosRequestConfig;
}

export async function request<TResponse = Record<string, unknown>>({
  method,
  url,
  data,
  params,
  config,
}: RequestOptions): Promise<ApiResponse<TResponse>> {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();
    const response = await api.request<ApiResponse<TResponse>>({
      url,
      method,
      data,
      params,
      headers: {
        ...config?.headers,
        Cookie: cookieHeader, // Forward browser cookies to .NET
      },
    });

    const setCookie = response.headers["set-cookie"];
    if (setCookie) {
      // In a real app, use a library like 'set-cookie-parser' here
      for (const cookieStr of setCookie) {
        const [nameValue] = cookieStr.split(";");
        const [name, value] = nameValue.split("=");
        cookieStore.set(name.trim(), value.trim(), {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
        });
      }
    }

    return response.data;
  } catch (error: any) {
    console.log("API request error:", error.response.data);
    const errorMessage =
      error.response?.data?.message ||
      error.errorType ||
      "An unexpected error occurred";
    const errorType =
      error?.response?.data?.errorType || "Unknown type of error";
    return {
      success: false,
      data: undefined,
      errors: errorMessage,
      message: errorMessage,
      errorType,
    } as ApiResponse<TResponse>;
  }
}
