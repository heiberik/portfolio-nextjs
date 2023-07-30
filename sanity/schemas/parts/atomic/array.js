export const array = ({ title = "Beholder", name = "container", description = null, validation = null, arrayContains = null }) => {
    return {
        type: "array",
        title,
        name,
        validation,
        description,
        of: [
            arrayContains
        ]
    }
}