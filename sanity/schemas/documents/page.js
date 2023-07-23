import { title } from "../parts/atomic/title";
import { contentBlocks } from "../parts/contentBlocks";
import { slug } from "../parts/atomic/slug";
import { seo } from "../parts/atomic/seo";

export const page = {
    name: "page",
    title: "Sider",
    type: "document",
    fields: [
        title("Sideoverskrift"),
        slug(),
        seo,
        contentBlocks,
    ],
    preview: {
        select: {
            title: "title"
        },
    },
};