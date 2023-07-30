import { string } from "../parts/atomic/string";
import { text } from "../parts/atomic/text";
import { image } from "../parts/image";

export const technology = {
    type: 'document',
    name: 'technology',
    title: 'Teknologi',
    fields: [
        string({ name: 'title', title: 'Tittel' }),
        text({ name: 'description', title: 'Beskrivelse' }),
        image({ title: "Relevant bilde" })
    ]
}

export const technologyObject = {
    name: "technologyObject",
    title: "Teknologier",
    type: "object",
    fields: [technology],
    preview: {
        select: { title: "title" },
        prepare() {
            return {
                title: "Teknologier",
                media: <IoTextOutline size={40} />
            }
        }
    }
}