export const seo = {
    name: 'seo',
    type: 'object',
    title: "SEO",
    fields: [
        {
            name: 'titleSEO',
            type: 'string',
            validation: (Rule) => Rule.required(),
            title: 'Tittel'
        },
        {
            name: 'descriptionSEO',
            type: 'text',
            validation: (Rule) => Rule.required(),
            title: 'Beskrivelse'
        }
    ]
}