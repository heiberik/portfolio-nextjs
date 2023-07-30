import { slug } from "../parts/atomic/slug";
import { seo } from "../parts/seo";
import { string } from "../parts/atomic/string";
import { richTextObject } from "../parts/richTextObject";
import { contentBlocks } from "../parts/contentBlocks";

export const page = {
    name: "page",
    title: "Sider",
    type: "document",
    fields: [
        string({ title: "Sideoverskrift" }),
        slug({}),
        seo({}),
        richTextObject({})
    ],
    preview: {
        select: {
            title: "title"
        }
    }
}