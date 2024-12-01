
export default function HeroSection() {
    return (
        <main className="flex flex-col items-center justify-center text-center"> {/* Added margin-top for spacing */}
          <div className="relative w-full">
            {/* Text in the background */}
            <h1 className="absolute inset-0 text-[450px] font-extrabold text-[#FFFFFF] opacity-30">
              CARS
            </h1>

            {/* Car image */}
            <img
              src="/car.svg"
              alt="Car"
              className="relative z-10 mx-auto w-[750px] top-64"  
            />
          </div>
        </main>
    )
}