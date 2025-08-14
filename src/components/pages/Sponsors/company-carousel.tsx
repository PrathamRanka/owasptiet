import { Sponsors } from "@/components/pages/Sponsors/Sponsors";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      {/* Responsive top margin for spacing from previous section */}
      <div className="mt-32 sm:mt-40 md:mt-52 lg:mt-60 xl:mt-72 w-full max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-['Orbitron'] text-white tracking-wide">
            The Best Are Already Here
          </h1>
        </div>

        {/* Carousel Section */}
        <div>
          <Sponsors />
        </div>
      </div>
    </div>
  );
}
