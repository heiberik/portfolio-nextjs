export const text = ({ name = "title", title = "Tekst", validation = null}) => {
    return {
        type: 'text',
        name,
        title,
        validation
    }
}