import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroComponent: z.any(),
  }),
});

export const collections = { pages };