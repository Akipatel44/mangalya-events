import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mangalya-events.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://mangalya-events.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://mangalya-events.vercel.app/services',
      lastModified: new Date(),
    },
    {
      url: 'https://mangalya-events.vercel.app/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://mangalya-events.vercel.app/events',
      lastModified: new Date(),
    },
    {
      url: 'https://mangalya-events.vercel.app/testimonials',
      lastModified: new Date(),
    },
    {
      url: 'https://mangalya-events.vercel.app/contact',
      lastModified: new Date(),
    },
  ]
}
