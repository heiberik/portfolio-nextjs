export const email = ({ name = "email", validation = null, title = "Mailadresse"}) => {
    return {
        type: 'string',
        name,
        validation,
        title
    }
}