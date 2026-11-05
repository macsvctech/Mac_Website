import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/settings' }),
  schema: z.object({
    siteTitle: z.string(),
    shortTitle: z.string().optional(),
    college: z.string().optional(),
    university: z.string().optional(),
    tagline: z.string().optional(),
    estYear: z.string().optional(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    logoUrl: z.string().optional(),
    faviconUrl: z.string().optional(),
    brochurePdfUrl: z.string().nullable().optional(),
    socials: z.object({
      instagram: z.string(),
      linkedin: z.string(),
    }),
    recruitmentBanner: z.object({
      enabled: z.boolean(),
      text: z.string(),
      link: z.string(),
    }),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
});

const intel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/intel' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["Research Report", "Blog", "Case Study", "Podcast / Video"]),
    publishDate: z.string(),
    readTime: z.string(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorAvatar: z.string().optional(),
    dossierId: z.string(),
    refNumber: z.string().optional(),
    urgency: z.string().optional(),
    excerpt: z.string(),
    coverImage: z.string(),
    coverCaption: z.string().optional(),
    videoEmbedUrl: z.string().optional(),
    attachmentFile: z.string().optional(),
    attachmentLabel: z.string().optional(),
    featured: z.boolean().default(false),
    keyTakeaways: z.array(z.string()).optional(),
    readingVelocity: z.string().optional(),
    order: z.number().default(99),
  }),
});

const roster = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/roster' }),
});

export const collections = { settings, pages, testimonials, events, gallery, intel, roster };

