export const email = () => {
    return {
        name: 'email',
        type: 'string',
        validation: (Rule) => Rule.required(),
        title: 'Mailadresse'
    }
}