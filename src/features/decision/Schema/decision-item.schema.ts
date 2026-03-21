import z from "zod";

export const SchemaCreateDecisionItem = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(80, "Title must be less than 100 characters"),
});
