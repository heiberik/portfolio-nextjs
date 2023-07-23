import React from "react"
import slugify from "slugify"

const formatSlug = (input, slugStart) => {

    const slug = slugify(input, {
        lower: true,
        strict: true,
        locale: "nb_NO",
    });

    return slugStart + slug;
}

export const slug = ({ prefix = "", source = "title" } = {}) => {

    const slugStart = prefix ? `/${prefix}/` : "/";

    return {
        title: "Slug (pathname)",
        name: "slug",
        type: "slug",
        description: "Trykk på knappen 'Generate' på høyre side eller skriv noe egendefinert. (NB: Bør ikke endres etter publisering pga. SEO)",
        validation: (Rule) => Rule.required(),
        options: {
            slugify: (value) => formatSlug(value, slugStart),
            source: source,
        },
        validation: (Rule) =>
            Rule.required().custom(({ current }) => {
                if (typeof current === "undefined") {
                    return true;
                }

                if (current) {
                    if (!current.startsWith(slugStart)) {
                        return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
                    }

                    if (current.slice(slugStart.length).split("").includes("/")) {
                        return `Slug cannot have another "/" after "${slugStart}"`;
                    }

                    if (current === slugStart) {
                        return "Slug cannot be empty";
                    }

                    if (current.endsWith("/")) {
                        return 'Slug cannot end with "/"';
                    }
                }

                return true;
            }),
    };
};