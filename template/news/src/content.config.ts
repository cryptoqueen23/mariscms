import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const stories=defineCollection({loader:glob({pattern:"**/*.{md,mdx}",base:"./src/content/stories"}),schema:z.object({title:z.string(),dek:z.string(),author:z.string(),section:z.string(),publishDate:z.coerce.date(),featured:z.boolean().default(false),breaking:z.boolean().default(false),heroImage:z.string().optional(),heroAlt:z.string().optional(),imageCredit:z.string().optional(),tags:z.array(z.string()).default([]),seoTitle:z.string().optional(),seoDescription:z.string().optional(),correctionsNote:z.string().optional()})});
const briefs=defineCollection({loader:glob({pattern:"**/*.md",base:"./src/content/briefs"}),schema:z.object({title:z.string(),summary:z.string(),date:z.coerce.date(),author:z.string(),section:z.string().optional()})});
export const collections={stories,briefs};
