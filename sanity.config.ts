/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import sanityStructure from 'sanity.structure'
import { structureTool } from 'sanity/structure'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { schema } from '~/schemas'

const iframeOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
    requiresSlug: ['post'],
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export default defineConfig({
  basePath: '/studio',
  name: 'Mida',
  title: 'Mida',
  projectId,
  dataset,
  //edit schemas in './src/schemas'
  schema,
  plugins: [
    structureTool({
      structure: sanityStructure,
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    ...(isDev ? [visionTool({ defaultApiVersion: apiVersion })] : []),
    vercelDeployTool(),
  ],
})
