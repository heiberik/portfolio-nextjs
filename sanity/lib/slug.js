import slugify from "slugify"

export const formatSlug = (input, slugStart) => {

    const slug = slugify(input, {
        lower: true,
        strict: true,
        locale: "nb_NO",
    });

    return slugStart + slug;
}