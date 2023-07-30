export const url = ({ name = "url", title = "Lenke til", description = null, validation = null}) => {
    return {
        type: "url",
        name,
        title,
        description,
        validation
    }
}