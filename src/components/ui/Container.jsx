const Container = ({ children, ...props }) => {
    return (
        <section
            className='relative mx-auto flex w-full max-w-[1200px] flex-col gap-4 bg-background p-4 !pb-20 md:p-8 xl:gap-8'
            {...props}
        >
            {children}
        </section>
    )
}

export default Container
