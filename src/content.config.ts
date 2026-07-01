import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      // Campos Base
      title: z.string().trim(),
      pubDate: z.coerce.date(),
      category: z
        .string()
        .trim()
        .default("Geral")
        .transform(
          (val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase(),
        ),
      isMonetized: z.boolean().default(false),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),

      // Campos Secundários / Flexíveis
      tags: z
        .array(z.string().trim())
        .default([])
        .transform((tags) => tags.map((tag) => tag.toLowerCase())),
      coverImage: z.union([image(), z.string().url()]).optional(),
      affiliateLink: z.string().url().optional(),
      affiliateProducts: z
        .array(
          z.object({
            title: z.string().trim(),
            description: z.string().trim(),
            imageUrl: z.string().url(),
            link: z.string().url(),
            price: z.string().optional(),
            badge: z.string().optional(),
          })
        )
        .optional(),

      // Campos mantidos do template original para compatibilidade retroativa (opcionais)
      description: z.string().trim().optional(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
    }),
});

const portfolio = defineCollection({
  loader: glob({
    base: "./src/content/portfolio",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      projectName: z.string().trim(),
      description: z.string().trim().optional(),
      techStack: z.array(z.string().trim()),
      githubUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      coverImage: z.union([image(), z.string().url()]).optional(),
      featured: z.boolean().default(false),
      isMonetized: z.boolean().default(false),
      affiliateLink: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, portfolio };
