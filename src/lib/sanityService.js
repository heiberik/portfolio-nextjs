import { client } from '../../sanity/lib/client'

export const getFrontPage = async () => {
    return await client.fetch(`*[_type == "frontPage"][0]`)
}

export const getSettings = async () => {
    return await client.fetch(`*[_type == "settings"][0]`)
}

export const getPages = async () => {
    return await client.fetch(`*[_type == "page"]`)
}

export const getPage = async (slug) => {
    return await client.fetch(
        `*[_type == "page" && slug.current == '${'/' + slug}'][0]`
    )
}

export const getPostForPreview = async (ref) => {
    return await client.fetch(
        `*[_type == "post" && _id == "${ref}"]{title, intro, image, slug}[0]`
    )
}

export const getProject = async (ref) => {
    return await client.fetch(`*[_type == "project" && _id == "${ref}"][0]`)
}
