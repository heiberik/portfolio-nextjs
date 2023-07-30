import { array } from "../parts/atomic/array";
import { string } from "../parts/atomic/string";
import { image } from "../parts/image";
import { richText } from "../parts/richTextObject";

export const project = {
    name: "project",
    title: "Prosjekt",
    type: "document",
    fields: [
        string({ title: "Prosjektnavn" }),
        string({ title: "Kodebase (Github)", name: "github" }),
        string({ title: "Deploy (nettside)", name: "url" }),
        image({ title: "Prosjektbilde" }),
        richText({ name: "description", title: "Beskrivelse av prosjekt" }),
        array({
            title: "Teknologier",
            description: "Legg til relevante teknologier brukt i prosjektet",
            arrayContains: {
                type: 'reference',
                to: { type: 'technology' }
            }
        })
    ]
}