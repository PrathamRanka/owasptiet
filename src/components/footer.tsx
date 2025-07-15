import StickyFooter from "@/ui/footer-ui";

export default function Footer() {
  return (
    <main className="text-foreground">
      {/* Main Content */}
      <div className="h-screen flex items-center justify-center px-4 -mt-48 md:-mt-20">
        <div className="text-center">
          <h2 className="text-white font-serif font-extrabold tracking-tight text-[9vw] md:text-[5vw] leading-tight mb-4">
            “Talk is cheap. Show me the code.”
          </h2>
          <p className="text-gray-400 italic text-base md:text-xl mb-2">
            — Linus Torvalds
          </p>
          <p className="text-white text-sm md:text-lg font-medium mt-2">
            At OWASP TIET, we live by this.
          </p>
          <p className="text-white text-sm md:text-lg font-medium mt-1">
            Perfect for a society that builds, not just talks.
          </p>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>
      </div>

      <StickyFooter />
    </main>
  );
};

export { Footer };
