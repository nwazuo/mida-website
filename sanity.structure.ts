import { StructureBuilder } from "sanity/structure"
import { GoOrganization, GoRocket } from "react-icons/go";


const sanityStructure = (S: StructureBuilder) => {

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projects')
        .icon(GoRocket)
        .child(
          S.documentTypeList('project')
        )
    ])
}

export default sanityStructure