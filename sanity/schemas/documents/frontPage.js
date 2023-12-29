import { array } from "../parts/atomic/array";
import { banner } from "../parts/banner";

export const frontPage = {
    name: "frontPage",
    title: "Forside",
    type: "document",
    fields: [
        banner({}),
        array({
            title: "Fremhevede innlegg",
            name: "promotedPosts",
            validation: (Rule) => [Rule.required(), Rule.length(3)],
            description: "Velg fire fremhevede blogginnlegg.",
            arrayContains: {
                type: "reference",
                name: "reference",
                to: [{ type: "post" }],
                options: {
                    disableNew: true
                }
            }
        }),
        array({
            title: "Fremhevede prosjekter",
            name: "promotedProjects",
            description: "Velg fremhevede prosjekter.",
            arrayContains: {
                type: "reference",
                name: "reference",
                to: [{ type: "project" }],
                options: {
                    disableNew: true
                }
            }
        })
    ],
    preview: {
        select: {
            title: "banner.title",
            media: "banner.image",
        }
    }
}