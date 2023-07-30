import { string } from "../parts/atomic/string";
import { text } from "../parts/atomic/text";

export const category = {
    type: 'document',
    name: 'category',
    title: 'Kategori',
    fields: [
        string({
            name: 'title',
            title: 'Tittel'
        }),
        text({
            name: 'description',
            title: 'Beskrivelse'
        })
    ]
}
