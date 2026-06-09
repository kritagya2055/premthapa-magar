export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 text-center border-b border-white/10">
        <span className="text-xl md:text-2xl font-bold tracking-wide text-white">
          Kritagya Bhandari
        </span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-3xl w-full mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Wait... watch the video{" "}
            <span className="text-[#C9A84C]">before you go</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Before your consultation, please watch this short video so you know
            what to do next.
          </p>

          {/* Vimeo embed */}
          <div className="mx-auto mb-10" style={{ maxWidth: "720px" }}>
            <div
              style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
            >
              <iframe
                src="https://player.vimeo.com/video/1198966045"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Consultation next steps"
              />
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/9779704593561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-[#d4b560] active:scale-95 transition-all shadow-lg shadow-[#C9A84C]/20"
          >
            Chat with me on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">
          © 2025 Kritagya Bhandari. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
