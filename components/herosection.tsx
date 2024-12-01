
export default function HeroSection() {
    return (
        <main className="flex flex-col items-center justify-center text-center  mt-32"> {/* Added margin-top for spacing */}
          <div className="relative w-full">
            {/* Text in the background */}
            <h1 className="absolute inset-5 text-[450px] font-extrabold text-[#FFFFFF] top-[-150px] opacity-30">
              CARS
            </h1>

            {/* Car image */}
            <img
              src="/car.svg"
              alt="Car"
              className="relative z-10 mx-auto mt-32 w-[750px]"  
            />
          </div>
        </main>
    )
}