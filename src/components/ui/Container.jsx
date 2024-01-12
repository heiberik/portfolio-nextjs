const Container = ({ variant, children, ...props }) => {
    return (
        <section
            className={`rounded-xl bg-gradient-to-b from-primary/20 to-transparent rounded-b-none relative mx-auto flex w-full max-w-[1150px] flex-col gap-4 pb-0 mb-16 md:mb-32 ${
                variant === 'border' ? 'p-[1px]' : 'p-0'
            }`}
            {...props}
        >
            <div
                className={`${
                    variant === 'border'
                        ? 'p-4 md:p-8 bg-transparent '
                        : 'p-0 bg-background '
                }  xl:gap-8 dark:bg-background rounded-xl rounded-b-none`}
            >
                {' '}
                {children}
            </div>
        </section>
    )
}

export default Container
