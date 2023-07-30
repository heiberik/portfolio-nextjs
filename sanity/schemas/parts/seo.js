import { string } from "./atomic/string";
import { text } from "./atomic/text";

export const seo = ({ name = "seo", title = "SEO"}) => {
    return {
        type: 'object',
        name,
        title,
        fields: [
            string({
                name: 'titleSEO',
                validation: (Rule) => Rule.required(),
                title: 'Tittel'
            }),
            text({
                name: 'descriptionSEO',
                validation: (Rule) => Rule.required(),
                title: 'Beskrivelse'
            })
        ]
    }
}