const SpecialHeader = ({ children, variant, ...props }) => {
    if (variant === 'square') {
        return (
            <div className='flex-grow rounded-xl p-[2px] text-3xl font-medium bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0'>
                <h2
                    className='text-foreground rounded-xl bg-background p-4 h-full w-full flex items-center justify-center'
                    {...props}
                >
                    {children}
                </h2>
            </div>
        )
    }

    return (
        <div>
            <h2
                className='bg-transparent pb-4 text-center text-3xl font-medium text-foreground'
                {...props}
            >
                {' '}
                {children}{' '}
            </h2>
            <div className='bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 mb-8 md:mb-16 pb-[2px] '></div>
        </div>
    )
}

export default SpecialHeader
