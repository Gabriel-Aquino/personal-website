import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      // Campos Base
      title: z.string(),
      pubDate: z.coerce.date(),
      category: z.string().default("Geral"),
      isMonetized: z.boolean().default(false),

      // Campos Secundários / Flexíveis
      tags: z.array(z.string()).default([]),
      coverImage: z.optional(image()),
      affiliateLink: z.string().url().optional(),

      // Campos mantidos do template original para compatibilidade retroativa (opcionais)
      description: z.string().optional(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
    }),
});

const portfolio = defineCollection({
  loader: glob({ base: "./src/content/portfolio", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      projectName: z.string(),
      techStack: z.array(z.string()),
      githubUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      coverImage: z.optional(image()),
    }),
});

export const collections = { blog, portfolio };
