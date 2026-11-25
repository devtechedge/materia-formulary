import { z } from "zod";

export const stackItemSchema = z.object({
  slug: z.string().min(1).max(120),
  form: z.string().min(1).max(80),
  doseMg: z.number().positive().max(100_000),
  servings: z.number().int().positive().max(20),
  timing: z.enum(["morning_food", "empty_stomach", "midday", "evening", "bedtime"]),
});

export const stackSchema = z.object({
  id: z.string().min(1).max(80),
  name: z.string().min(1).max(120),
  items: z.array(stackItemSchema).max(60),
});

export const searchSchema = z.object({
  q: z.string().max(120).optional(),
  category: z.string().max(80).optional(),
  grade: z.enum(["A", "B", "C", "D"]).optional(),
  goal: z.string().max(80).optional(),
});
