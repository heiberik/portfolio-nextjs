const NotFound = () => {
    return (
        <div className="w-screen h-screen relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-screen justify-center flex flex-col items-center gap-2">
                <div className="flex flex-col items-center gap-2 p-12  mb-6 px-20 w-screen">
                    <h1 className="bold text-3xl w-fit  mb-0 pb-2"> Oisann! </h1>
                    <p className="text-xl text-muted-foreground whitespace-nowrap"> Vi fant dessverre ikke siden du lette etter.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound