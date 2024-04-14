import { StructureBuilder } from 'sanity/structure'
import { GoOrganization, GoRocket } from 'react-icons/go'
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5'

const SITE_PAGES = [
  'page-home',
  'page-about',
  'page-contact',
  'page-partnerships',
  'page-services',
  'page-work'
]

const sanityStructure = (S: StructureBuilder) => {
  const getSitePagesDocumentListItem = (page: any) => {
    const defaultListItem = S.documentTypeListItem(page)

    return S.listItem()
      .schemaType(page)
      .title(defaultListItem.getTitle())
      .icon(IoDocumentTextOutline)
      .child(S.document().schemaType(page).documentId(page))
  }

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              ...SITE_PAGES.map((page) => getSitePagesDocumentListItem(page)),
            ]),
        ),
      S.listItem()
        .title('Projects')
        .icon(GoRocket)
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Site Settings')
        .icon(IoSettingsOutline)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site settings'),
        ),
    ])
}

export default sanityStructure
