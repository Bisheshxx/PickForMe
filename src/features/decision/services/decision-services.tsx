import { request } from "@/shared/lib/axios/request";
import { Decision, DecisionDetail } from "../types/decision.types";
import z from "zod";
import { SchemaCreateDecision } from "../Schema/create-decision.schema";

export const DecisionService = {
  getDecisions: async (params: Record<string, unknown>) =>
    request<Decision[]>({
      method: "GET",
      url: "decisions",
      params: params,
    }),
  createDecision: async (data: z.infer<typeof SchemaCreateDecision>) =>
    request<Decision>({
      method: "POST",
      url: "decisions",
      data,
    }),
  getDecisionDetails: async (id: string) =>
    request<DecisionDetail>({
      method: "GET",
      url: `decision/${id}`,
    }),
  updateDecision: async (
    id: string,
    data: Partial<Pick<Decision, "title" | "description">>,
  ) =>
    request<null>({
      method: "PUT",
      url: `decision/${id}`,
      data,
    }),
};
