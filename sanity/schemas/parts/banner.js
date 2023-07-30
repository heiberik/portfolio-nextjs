import { array } from "./atomic/array";
import { button } from "./button";
import { image } from "./image";
import { text } from "./atomic/text";

export const banner = ({}) => {
    return {
        type: "object",
        name: "banner",
        title: "Banner",
        fields: [
            text({ name: "title", title: "Hovedoverskrift" }),
            text({ name: "description", title: "Beskrivelse" }),
            image({ title: "Bakgrunnsbilde" }),
            array({
                title: "Knapper med lenke",
                name: "bannerButtons",
                description: "Knapper under hoved- og underoverskrift.",
                arrayContains: button({})
            })
        ]
    }
}