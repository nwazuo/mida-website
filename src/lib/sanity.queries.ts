import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { getClient } from './sanity.client'

export async function getQueryData(
  query: string,
  queryParams?: any,
  preview?: boolean,
) {
  const client = getClient(preview)
  return await client.fetch(query, queryParams)
}

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(): Promise<Post[]> {
  return await getQueryData(postsQuery)
}

/* Projects */

const projectsQueryFrag = `
*[_type == "project"] {
  ...,
  cover {
    ...,
    photo {
      ...,
      asset->
    }
  },
  services[]->
}
`

export const projectsByPageQuery = groq`
${projectsQueryFrag}[(($page-1)*$size)...($page*$size)] | order(_publishedAt desc) 
`

export const projectsQuery = groq`
  ${projectsQueryFrag} | order(_publishedAt desc) 
`

export async function getProjectsByPage(
  page: number,
  size: number,
): Promise<Project[]> {
  return await getQueryData(projectsByPageQuery, { page, size })
}

export async function getAllProjects(): Promise<Project[]> {
  return await getQueryData(projectsQuery)
}

/* Site settings */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]
`

export async function getSiteSettings(): Promise<SiteSettings> {
  return await getQueryData(siteSettingsQuery)
}

/* Pages Meta */
export const pageMetaBySlug = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    description
  }
`

/* Blog */
export const postsListQuery = groq`
{
  "items": *[_type == "post"] {
    slug,
    cover {
      ...,
      asset->
    },
    title,
    tags,
    _id
  }[(($page - 1)*$size)...($page * $size)] | order(publishedAt desc),
  "total": count(*[_type == "post"]) 
}
`

export async function getPostsByPageAndSize(
  page: number,
  size: number,
): Promise<{ items: Post[]; total: number }> {
  return await getQueryData(postsListQuery, { page, size })
}

export const postPagesCountQuery = groq`
{
  "pages": count(*[_type == "post"]) / $size
}
`

export async function getPostPagesCountBySize(
  size: number,
): Promise<{ pages: number }> {
  return await getQueryData(postPagesCountQuery, { size })
}

export const postSlugs = groq`
  *[_type == "post"] {
    "slug": slug.current
  }
`

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  return await getQueryData(postSlugs)
}

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...
}
`

export async function getPostBySlug(slug: string): Promise<Post> {
  return await getQueryData(postBySlugQuery, { slug })
}

/* Meta */

export async function getPageMetaBySlug(slug: string): Promise<PageMeta> {
  return await getQueryData(pageMetaBySlug, { slug })
}

export interface Post {
  _id: string
  body: PortableTextBlock[]
  cover: {
    alt: string
    asset: any
  }
  publishedAt: string
  slug: {
    current: string
  }
  tags: string[]
  title: string
}

export interface Project {
  _type: 'project'
  _id: string
  _createdAt: string
  title?: string
  liveLink: string
  cover: {
    photo: any
    crop: 'landscape' | 'portrait'
  }
  shortDescription: string
  publishedAt?: string
  services: Service[]
}

export interface Service {
  _type: 'service'
  _id: string
  _createdAt: string
  title: string
}

export interface SiteSettings {
  defaultMeta: {
    defaultSiteDescription: string
    defaultSiteTitle: string
  }
  socials: {
    instagram: string
    linkedin: string
    twitter: string
    facebook: string
    dribbble: string
  }
  contact: {
    address: string
    email: string
    phone: string
  }
}

export interface PageMeta {
  title: string
  description: string
}
