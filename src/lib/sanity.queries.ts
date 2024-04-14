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



export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
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
  }
  contact: {
    address: string
    email: string
    phone: string
  }
}
