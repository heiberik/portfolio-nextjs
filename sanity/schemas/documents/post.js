import { image } from "../parts/image"
import { slug } from "../parts/atomic/slug"
import { string } from "../parts/atomic/string"
import { text } from "../parts/atomic/text"
import { reference } from "../parts/atomic/reference"
import { array } from "../parts/atomic/array"
import { dateTime } from "../parts/atomic/dateTime"
import { richText } from "../parts/richTextObject"

export const post = {
    type: 'document',
    name: 'post',
    title: 'Innlegg',
    fields: [
        string({
            name: 'title',
            title: 'Title'
        }),
        text({
            name: 'intro',
            title: 'Introduksjon'
        }),
        slug({ prefix: "blog" }),
        reference({
            name: 'author',
            title: 'Author',
            referenceToType: 'author'
        }),
        image({title: "Hovedbilde"}),
        array({
            name: 'categories',
            title: 'Categories',
            arrayContains: { 
                type: 'reference', 
                to: { type: 'category' } 
            }
        }),
        dateTime({}),
        richText({
            name: 'body',
            title: 'Body'
        })
    ]
}