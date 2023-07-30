import { formatSlug } from "../../../lib/slug";

export const slug = ({ prefix = "", source = "title", title = "Slug (pathname)", name = "slug" }) => {

    const slugStart = prefix ? `/${prefix}/` : "/";

    return {
        type: "slug",
        title,
        name,
        validation: (Rule) => Rule.required(),
        options: {
            slugify: (value) => formatSlug(value, slugStart),
            source: source,
        },
        validation: (Rule) =>
            Rule.required().custom(({ current }) => {
                if (typeof current === "undefined") return true;
                if (current) {
                    if (!current.startsWith(slugStart)) {
                        return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
                    }
                    if (current === slugStart) {
                        return "Slug cannot be empty";
                    }
                    if (current.endsWith("/")) {
                        return 'Slug cannot end with "/"';
                    }
                }
                return true;
            })
    }
}