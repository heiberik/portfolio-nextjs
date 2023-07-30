import { client } from "../../sanity/lib/client";

export const getFrontPage = async () => {
    return await client.fetch(`*[_type == "frontPage"][0]`)
}

export const getSettings = async () => {
    return await client.fetch(`*[_type == "settings"][0]`)
}

export const getPages = async () => {
    return await client.fetch(`*[_type == "page"]`)
}

export const getRoutes = async () => {
    const pages = await client.fetch(`*[_type == "page"]`)
    const routes = pages.map(page => {
        return {
            title: page.title,
            url: page.slug.current,
            colorLink: page.colorLinkBackground
        }
    })
    return routes.sort((a, b) => {
        if (a.colorLink && !b.colorLink) return 1
        else return -1
    } )
}

export const getPage = async (slug) => {
    return await client.fetch(`*[_type == "page" && slug.current == '${"/" + slug}'][0]`)
}

export const getPostForPreview = async (ref) => {
    return await client.fetch(`*[_type == "post" && _id == "${ref}"]{title, intro, image, slug}[0]`)
}

export const getProject = async (ref) => {
    return await client.fetch(`*[_type == "project" && _id == "${ref}"][0]`)
}