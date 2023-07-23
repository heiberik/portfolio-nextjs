import { banner } from "../parts/banner";

export const frontPage = {
    name: "frontPage",
    title: "Forside",
    type: "document",
    fields: [
        banner
    ],
    preview: {
        select: {
            title: "banner.title",
            media: "banner.image",
        }
    }
}