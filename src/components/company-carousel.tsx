import { ThreeDPhotoCarousel } from "@/ui/3d-carousel"

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      {/* Manually shift everything down */}
      <div className="mt-[1680px] md:mt-[320px] w-full max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-1 md:mb-6"> {/* Tighter mobile margin */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-['Orbitron'] text-white tracking-wide">
            The Best Are Already Here
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-neutral-400 font-medium font-mono tracking-tight">
            Join the cult.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="min-h-[600px] flex flex-col justify-center items-center rounded-lg px-4 sm:px-0">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
}
