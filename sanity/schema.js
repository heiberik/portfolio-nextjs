import { category } from './schemas/documents/category'
import { post } from './schemas/documents/post'
import { author } from './schemas/documents/author'
import { frontPage } from './schemas/documents/frontPage'
import { settings } from './schemas/documents/settings'
import { project } from './schemas/documents/project'
import { technology } from './schemas/documents/technology'

export const schema = {
    types: [frontPage, settings, post, author, category, project, technology],
}
