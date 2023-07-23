import { richTextObject } from "./richTextObject"

export const contentBlocks = {
    name: "contentBlocks",
    type: "array",
    title: "Innholdsbokser",
    description: "Her legger du til alt egendefinert innhold. Du kan legge til så mange 'innholdsbokser' du ønsker.",
    of: [
        richTextObject
    ]
}