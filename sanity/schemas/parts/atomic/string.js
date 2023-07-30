export const string = ({name = "title", validation = null, title = "Tittel"}) => {
    return {
        type: 'string',
        name,
        validation,
        title
    }
}