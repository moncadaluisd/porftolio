import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string().optional(),
    shortDescription: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    image: z.string(),
    shortDescription: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  blog,
};