export const reference = ({ name = "reference", title = null, referenceToType = null}) => {
    return {
        type: 'reference',
        name,
        title,
        to: { type: referenceToType },
    }
}