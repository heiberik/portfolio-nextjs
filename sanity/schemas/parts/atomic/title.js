export const title = (title = "Overskrift", name = "title") => {
    return {
        name: name,
        title: title,
        type: "string",
        validation: (Rule) => Rule.required(),
    }
} 