import { banner } from "../parts/banner";

export const frontPage = {
    name: "frontPage",
    title: "Forside",
    type: "document",
    fields: [
        banner,
        {
            title: "Fremhevede innlegg",
            name: "promotedPosts",
            type: "array",
            validation: (Rule) => [Rule.required(), Rule.length(4)],
            description: "Velg fire fremhevede blogginnlegg.",
            of: [
              {
                type: "reference",
                to: [{ type: "post" }],
                options: {
                  disableNew: true
                }
              }
            ]
          }
    ],
    preview: {
        select: {
            title: "banner.title",
            media: "banner.image",
        }
    }
}