import { StructureBuilder } from 'sanity/structure'
import { GoOrganization, GoRocket } from 'react-icons/go'
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5'

const sanityStructure = (S: StructureBuilder) => {

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page')),
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
