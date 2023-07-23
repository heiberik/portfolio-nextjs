import { BsLink } from 'react-icons/bs'

export const button = {
    name: "button",
    title: "Knapp med lenke",
    type: "object",
    fields: [
        {
            name: "text",
            title: "Tekst",
            description: "Skriv en tekst som skal synes på knappen.",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "url",
            title: "Lenke til",
            description: "Enten en intern lenke, feks: '/tjenester' eller en ekstern lenke, feks: 'https://nrk.no'",
            type: "url",
            validation: (Rule) =>
                Rule.required().uri({
                    allowRelative: true,
                    scheme: ["http", "https"],
                }),
        },
        {
            name: 'important',
            type: 'boolean',
            title: "Viktig knapp?",
            description: "Viktige knapper får en sterkere bakgrunnsfarge. Bruk det sparsomt."
        }
    ],

    preview: {
        select: {
            title: "text"
        },
        prepare({ title }){
            return {
                title: title,
                media: <BsLink size={30} />
            }
        }
    }
}