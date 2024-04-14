import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { getClient } from './sanity.client'

export async function getQueryData(query: string, queryParams?: any, preview?: boolean) {
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

export async function getProjectsByPage(page: number, size: number): Promise<Project[]> {
  return await getQueryData(projectsByPageQuery, { page, size })
}

export async function getAllProjects(): Promise<Project[]> {
  return await getQueryData(groq`*[_type == "project"]`)
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
  slug: Slug
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