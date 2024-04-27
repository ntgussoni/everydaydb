import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const beNotifiedRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({ email: z.string().min(1), reason: z.string().optional() }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.beNotified.create({
        data: {
          email: input.email,
          reason: input.reason,
        },
      });
    }),
});
