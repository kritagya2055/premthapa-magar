'use client';
export default function Thanks() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">
        Wait... watch the video before you go
      </h1>
      <p className="text-[#A0A0A0] text-center mb-8">
        Before your consultation, please watch this short video so you know what to do next.
      </p>
      <div className="w-full max-w-[720px] aspect-video mb-8">
        <iframe
          src="https://player.vimeo.com/video/1198966045"
          className="w-full h-full"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Consultation next steps"
        />
      </div>
      <a
        href="https://wa.me/9779704593561"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#C9A84C] text-black font-bold px-8 py-4 rounded-lg hover:opacity-90 transition"
      >
        Chat with me on WhatsApp
      </a>
    </main>
  );
}
