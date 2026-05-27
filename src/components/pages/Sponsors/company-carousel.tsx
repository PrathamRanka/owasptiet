import { Sponsors } from "@/components/pages/Sponsors/Sponsors";

export default function ThreeDPhotoCarouselDemo() {
  return (
    <div
      className="
        w-full flex flex-col lg:min-h-screen
        sm:px-8 md:px-4 pt-12 pb-16 sm:pt-16 sm:pb-20
      "
    >
      {/* Centering Wrapper */}
      <div className="flex flex-col justify-center items-center flex-grow w-full max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <div className="mb-16">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono block mb-6">
            OWASP Sponsors
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-wide">
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
