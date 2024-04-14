import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'

export function getClient(preview?: boolean): SanityClient {
  const token = process.env.SANITY_READ_TOKEN

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}
