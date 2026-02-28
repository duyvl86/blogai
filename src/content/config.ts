import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Admin'),
    image: z.string().optional(),
    category: z.string().default('ai'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    website: z.string(),
    logo: z.string().optional(),
    category: z.string(),
    pricing: z.enum(['free', 'freemium', 'paid']),
    features: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
  tools: toolsCollection,
};
