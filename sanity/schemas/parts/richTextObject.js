import { IoTextOutline } from 'react-icons/io5';

export const richText = ({ title = "Brødtekst", name = "richText" }) => {
    return {
        title,
        name,
        type: "array",
        of: [
            {
                title: 'Block',
                type: 'block',
                styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H1', value: 'h1' },
                    { title: 'H2', value: 'h2' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' },
                    { title: 'Quote', value: 'blockquote' },
                ],
                lists: [{ title: 'Bullet', value: 'bullet' }],
                marks: {
                    decorators: [
                        { title: 'Strong', value: 'strong' },
                        { title: 'Emphasis', value: 'em' },
                    ],
                    annotations: [
                        {
                            title: 'URL',
                            name: 'link',
                            type: 'object',
                            fields: [
                                {
                                    title: 'URL',
                                    name: 'href',
                                    type: 'url',
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'image',
                options: { hotspot: true },
                fields: [
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative Text',
                    }
                ]
            }
        ]
    }
}

export const richTextObject = ({ name = "richTextObject", title = "Tekstboks" }) => {
    return {
        name,
        title,
        type: "object",
        fields: [richText({})],
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
}
