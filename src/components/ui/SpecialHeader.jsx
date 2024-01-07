const SpecialHeader = ({ children, variant, ...props }) => {


    if (variant === "square") {
        return (
            <div className='flex-grow bg-gradient-to-br from-primary/0 via-primary to-primary/0 p-[2px] text-3xl font-medium'>
                <h2 className='text-foreground bg-background p-4 h-full w-full flex items-center justify-center' {...props}>
                    {children}
                </h2>
            </div>
        )
    }

    return (
        <div className='bg-gradient-to-r from-primary/0 via-primary to-primary/0 mb-8 md:mb-16 pb-[2px] text-center text-3xl font-medium text-foreground'>
            <h2 className='bg-background pb-4' {...props}> {children} </h2>
        </div>
    );
}

export default SpecialHeader;