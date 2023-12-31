const Container = ({ children, ...props }) => {
    return (
        <section className="w-full max-w-[1280px] relative mx-auto p-4 md:p-8 !pb-0 !pt-16 bg-background flex flex-col gap-4 xl:gap-8" {...props}>
            {children} 
        </section>
    )
}

export default Container