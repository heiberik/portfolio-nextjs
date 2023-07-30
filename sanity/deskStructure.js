import {
    FiSettings,
    FiHome
} from "react-icons/fi";

export const customDesk = (S) =>
    S.list()
        .title("Innhold")
        .items([
            S.listItem()
                .title("Generelt")
                .icon(FiSettings)
                .child(S.document().schemaType("settings").documentId("settings")),
            S.divider(),
            S.listItem()
                .title("Forside")
                .icon(FiHome)
                .child(S.document().schemaType("frontPage").documentId("frontPage")),
            S.documentTypeListItem("page").title("Sider"),
            S.divider(),
            S.documentTypeListItem("post").title("Blogginnlegg"),
            S.documentTypeListItem("project").title("Prosjekter"),
            S.divider(),
            S.documentTypeListItem("technology").title("Teknologier"),
            S.documentTypeListItem("category").title("Kategorier"),
            S.documentTypeListItem("author").title("Forfattere")
        ])
