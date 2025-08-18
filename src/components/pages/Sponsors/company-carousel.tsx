import { Sponsors } from "@/components/pages/Sponsors/Sponsors";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div
      className="
        w-full flex flex-col items-center
        sm:px-8 md:px-4
        pt-12 pb-16 sm:pt-16 sm:pb-20
        lg:min-h-screen
      "
    >
      {/* Responsive top margin for spacing from previous section */}
      <div className="mt-8 sm:mt-24 md:mt-28 lg:mt-16 xl:mt-20 w-full max-w-6xl flex flex-col flex-grow">
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono block mb-6">
            OWASP Sponsors
          </span>

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-['Orbitron'] text-white tracking-wide">
              The Best Are Already Here
            </h1>
          </div>
        </div>

        {/* Carousel Section */}
        <div>
          <Sponsors />
        </div>
      </div>
    </div>
  );
}
