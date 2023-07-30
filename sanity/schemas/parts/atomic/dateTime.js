export const dateTime = ({name = "publishedAt", title = "Publisert"}) => {
    return {
        type: 'datetime',
        name,
        title
    }
}