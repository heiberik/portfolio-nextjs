export const image = (title = "Bilde") => {
    return {
        name: 'image',
        type: 'image',
        title: title,
        fields: [
            {
                name: 'alt',
                type: 'string',
                validation: (Rule) => Rule.required(),
                title: 'alternativ tekst',
            }
        ]
    }
}