import { image } from "./image"
import { richTextObject } from "./richTextObject"


export const contentBlocks = ({ name = "contentBlocks", title = "Innholdsbokser"}) => {
    return {
        type: "array",
        name,
        title,
        description: "Her legger du til alt egendefinert innhold. Du kan legge til så mange 'innholdsbokser' du ønsker.",
        of: [
            richTextObject({}),
            image({title: "Enkelt bilde"})
        ]
    }
}