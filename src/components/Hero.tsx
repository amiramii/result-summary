function Hero(){
    return(
        <div className="bg-hero text-white flex flex-col items-center rounded-b-4xl p-5 gap-y-2 pb-10 w-full md:rounded-4xl md:justify-between md:p-8">
            <h1 className="text-Light-lavender font-bold text-xl mb-4 md:mb-0">
                Your Result
            </h1>
            <div className="bg-circle flex flex-col items-center justify-center p-1 gap-y-2 size-30 rounded-full">
                <h1 className="text-5xl font-extrabold">
                 76
                </h1>
                <span className="text-Light-lavender">
                 of 100
                </span>

            </div>
            <h1 className="font-bold text-2xl">
                Great
            </h1>
            <p className="text-Light-lavender w-3/6 text-center text-[18px] md:w-3/4">
            You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    )
}
export default Hero;