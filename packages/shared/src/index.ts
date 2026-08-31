import { z } from "zod";

export const todoSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1).max(200),
  completed: z.boolean(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export const createTodoSchema = todoSchema.pick({ title: true });
export const updateTodoSchema = todoSchema
  .pick({ title: true, completed: true })
  .partial();

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;
