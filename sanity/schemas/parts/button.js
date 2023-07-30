import { BsLink } from 'react-icons/bs'
import { url } from './atomic/url'
import { boolean } from './atomic/boolean'
import { string } from './atomic/string'

export const button = ({ name = "button", title = "Knapp med lenke" }) => {
    return {
        type: "object",
        name,
        title,
        fields: [
            string({
                name: "text",
                title: "Tekst",
                description: "Skriv en tekst som skal synes på knappen.",
                validation: (Rule) => Rule.required(),
            }),
            url({
                name: "url",
                title: "Lenke til",
                description: "Enten en intern lenke, feks: '/tjenester' eller en ekstern lenke, feks: 'https://nrk.no'",
                validation: (Rule) => Rule.required().uri({
                    allowRelative: true,
                    scheme: ["http", "https"],
                })
            }),
            boolean({
                name: 'important',
                title: "Viktig knapp?",
                description: "Viktige knapper får en sterkere bakgrunnsfarge. Bruk det sparsomt."
            })
        ],

        preview: {
            select: {
                title: "text"
            },
            prepare({ title }) {
                return {
                    title: title,
                    media: <BsLink size={30} />
                }
            }
        }
    }
}