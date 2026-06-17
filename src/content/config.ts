import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    draft: z.boolean().optional(),
    takeaways: z.array(z.string()).optional(),
  }),
});

export const collections = { writing };
