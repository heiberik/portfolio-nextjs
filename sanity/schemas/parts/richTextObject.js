import { IoTextOutline } from 'react-icons/io5';

const richText = {
    title: "Brødtekst",
    name: "richText",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
            ],
            marks: {
                decorators: [
                    { title: "Bold", value: "strong" },
                    { title: "Italic", value: "em" },
                ],
                annotations: [

                ]
            }
        }
    ]
}

export const richTextObject = {
    name: "richTextObject",
    title: "Tekstboks",
    type: "object",
    fields: [richText],
    preview: {
        select: { title: "title" },
        prepare() {
            return {
                title: "Tekstboks",
                media: <IoTextOutline size={40} />
            }
        }
    }
}