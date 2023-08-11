import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroComponent: z.object({
      title: z.string(),
      subhead: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      button: z.object({
        text: z.string(),
        style: z.string(),
        href: z.string(),
      }),
    }),
  })
})

export const collections = { pages };