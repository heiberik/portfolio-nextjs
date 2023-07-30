import { string } from "./atomic/string"

export const image = ({title = "Bilde"}) => {
    return {
        name: 'image',
        type: 'image',
        title: title,
        fields: [
            string({
                name: 'alt',
                validation: (Rule) => Rule.required(),
                title: 'alternativ tekst',
            })
        ]
    }
}