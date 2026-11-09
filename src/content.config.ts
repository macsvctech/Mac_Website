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
    email: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    logoUrl: z.string().optional(),
    faviconUrl: z.string().optional(),
    brochurePdfUrl: z.string().nullable().optional(),
    brochurePdfEnabled: z.boolean().default(false).optional(),
    brochureLabel: z.string().optional(),
    socials: z.object({
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
    }).optional(),
    recruitmentBanner: z.object({
      enabled: z.boolean().default(false),
      text: z.string().default("/// RECRUITMENT RESULTS 2026-27 ARE LIVE — CLICK TO CHECK CLEARANCE ///"),
      link: z.string().default("/roster#clearance-board"),
    }).optional(),
  }).passthrough(),
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
    category: z.string().default("INTEL").optional(),
    publishDate: z.string().default("RECENT").optional(),
    readTime: z.string().default("5 MIN READ").optional(),
    author: z.string().default("MAC CADRE").optional(),
    authorRole: z.string().optional(),
    authorAvatar: z.string().optional(),
    dossierId: z.string().default("MAC_INTEL_REF"),
    refNumber: z.string().optional(),
    urgency: z.string().optional(),
    excerpt: z.string().default("").optional(),
    coverImage: z.string().default("/uploads/images/screens/home-screen.png").optional(),
    coverCaption: z.string().optional(),
    videoEmbedUrl: z.string().optional(),
    attachmentFile: z.string().optional(),
    attachmentLabel: z.string().optional(),
    attachmentEnabled: z.boolean().default(true).optional(),
    featured: z.boolean().default(false).optional(),
    enabled: z.boolean().default(true).optional(),
    keyTakeaways: z.array(z.string()).optional(),
    readingVelocity: z.string().optional(),
    order: z.number().default(99).optional(),
  }),
});

const roster = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/roster' }),
});

export const collections = { settings, pages, testimonials, events, gallery, intel, roster };
