import { button } from "./atomic/button";
import { image } from "./atomic/image";

export const banner = {
    name: "banner",
    title: "Banner",
    type: "object",
    fields: [
        {
            name: 'title',
            title: 'Hovedoverskrift',
            type: 'text',
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'text',
        },
        image("Bakgrunnsbilde"),
        {
            title: "Knapper med lenke",
            name: "bannerButtons",
            type: "array",
            description: "Knapper under hoved- og underoverskrift.",
            of: [
                button
            ]
        }
    ]
}