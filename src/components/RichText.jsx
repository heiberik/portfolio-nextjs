import { PortableText } from "@portabletext/react"

const RichText = ({ sanityData }) => {

    return (
        <div className="">
            <PortableText
                value={sanityData}
                components={{
                    list: {
                        bullet: ({ children }) => <ul className="list">{children}</ul>,
                        number: ({ children }) => <ol className="list">{children}</ol>,
                    },
                    block: {
                        // Ex. 1: customizing common block types
                        normal: ({ children }) => <p className="mt-4 md:mt-6 text-xl mb-2 md:mb-4 w-[70ch] max-w-full">{children}</p>,
                        h1: ({ children }) => <h1 className="text-5xl mt-8 md:mt-12 max-w-full text-left">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-4xl mt-8 md:mt-12 max-w-full">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-3xl mt-8 md:mt-12 max-w-full">{children}</h3>,
                        h4: ({ children }) => <h4 className="text-2xl mt-8 md:mt-12 max-w-full">{children}</h4>
                    },
                }}
            />
        </div>
    )
}

export default RichText