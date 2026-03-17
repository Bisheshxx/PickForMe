"use client";

import {
  useQuery,
  type QueryFunctionContext,
  type UseQueryOptions,
} from "@tanstack/react-query";
import type { ApiErrorHandler } from "../lib/axios/Api-Error-Handler";
import type { ApiResponse } from "../types/global.types";

type QueryOptions<
  TData,
  TSelected,
  TQueryKey extends readonly unknown[],
> = Omit<
  UseQueryOptions<ApiResponse<TData>, ApiErrorHandler, TSelected, TQueryKey>,
  "queryKey" | "queryFn"
>;

type UseQueryParams<TData, TSelected, TQueryKey extends readonly unknown[]> = {
  queryKey: TQueryKey;
  queryFn: (
    context: QueryFunctionContext<TQueryKey>,
  ) => Promise<ApiResponse<TData>>;
  options?: QueryOptions<TData, TSelected, TQueryKey>;
};

export const useApiQuery = <
  TData,
  TSelected = ApiResponse<TData>,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>({
  queryKey,
  queryFn,
  options,
}: UseQueryParams<TData, TSelected, TQueryKey>) => {
  return useQuery<ApiResponse<TData>, ApiErrorHandler, TSelected, TQueryKey>({
    queryKey,
    queryFn,
    ...options,
  });
};
