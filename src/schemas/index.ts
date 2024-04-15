import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import project from './project'
import service from './service'
import siteSettings from './siteSettings'
import page from './page'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blockContent,
    project,
    service,
    siteSettings,
    page,
  ],
}
