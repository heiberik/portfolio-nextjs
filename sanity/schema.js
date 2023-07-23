import { blockContent } from './schemas/parts/blockContent'
import { category } from './schemas/documents/category'
import { post } from './schemas/documents/post'
import { author } from './schemas/documents/author'
import { frontPage } from './schemas/documents/frontPage'
import { page } from './schemas/documents/page'
import { settings } from './schemas/documents/settings'

export const schema = {
    types: [post, author, category, blockContent, frontPage, page, settings],
}
