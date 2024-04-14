import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import project from './project'
import service from './service'
import siteSettings from './siteSettings'
import aboutPage from './pages/aboutPage'
import contactPage from './pages/contactPage'
import homePage from './pages/homePage'
import partnershipsPage from './pages/partnerships'
import servicesPage from './pages/servicesPage'
import workPage from './pages/workPage'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blockContent,
    project,
    service,
    siteSettings,

    // pages
    aboutPage,
    contactPage,
    homePage,
    partnershipsPage,
    servicesPage,
    workPage,
  ],
}
