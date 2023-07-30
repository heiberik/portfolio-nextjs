import { image } from "../parts/image";
import { slug } from "../parts/atomic/slug";
import { array } from "../parts/atomic/array";
import { string } from "../parts/atomic/string";

export const author = {
    type: 'document',
    name: 'author',
    title: 'Forfatter',
    fields: [
        string({
            name: 'name',
            title: 'Navn',
            validation: (Rule) => Rule.required()
        }),
        slug({}),
        image({ title: "Profilbilde" }),
        array({
            name: 'bio',
            title: 'Bio',
            arrayContains: {
                title: 'Block',
                type: 'block',
                name: "block",
                styles: [{ title: 'Normal', value: 'normal' }],
                lists: []
            }
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        }
    }
}
