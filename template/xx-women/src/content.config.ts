import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const features = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/features" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    department: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    package: z.string().optional(),
    issue: z.string().optional(),
    contentType: z.string().default("Feature"),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    sources: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    disclosure: z.string().optional(),
  }),
});

const voices = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/voices" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    author: z.string(),
    type: z.string().default("Essay"),
    publishDate: z.coerce.date(),
    department: z.string(),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    servings: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { features, voices, recipes };
