import { image } from "../parts/atomic/image";
import { slug } from "../parts/atomic/slug";

export const author = {
    name: 'author',
    title: 'Forfatter',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
        },
        slug(),
        image("Profilbilde"),
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}
