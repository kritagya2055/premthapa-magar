import FAQ from "@/components/FAQ";
import FlodeskFormWrapper from "@/components/FlodeskFormWrapper";

const problems = [
  "Posting on Facebook and Instagram but not getting enough inquiries",
  "Boosting posts but not seeing real sales",
  "Not knowing what marketing strategy to use",
  "Getting random leads but not serious customers",
  "Depending only on referrals and word of mouth",
  "Feeling confused about ads, content, landing pages, and follow-up",
];

const steps = [
  { number: "01", title: "Fill up the form" },
  { number: "02", title: "Receive an email with the appointment link" },
  { number: "03", title: "Fill the appointment form" },
  { number: "04", title: "Join the 1:1 consultation call" },
  {
    number: "05",
    title: "Get your customized digital marketing plan — completely FREE",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="py-6 px-4 text-center border-b border-white/10">
        <span className="text-xl md:text-2xl font-bold tracking-wide text-white">
          Kritagya Bhandari
        </span>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Struggling to get{" "}
          <span className="text-[#C9A84C]">more customers?</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
          Book a FREE 1:1 Marketing Consultation Call
        </p>
        <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
          In this 1-hour call, I&apos;ll understand your business and give you a
          simple digital marketing plan to get more leads, customers, and sales.
        </p>
        <a
          href="#form-section"
          className="inline-block bg-[#C9A84C] text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-[#d4b560] active:scale-95 transition-all shadow-lg shadow-[#C9A84C]/20"
        >
          Book Your FREE Call Now
        </a>
      </section>

      {/* Problem + Solution */}
      <section className="py-20 px-4 bg-white/[0.03]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Does This Sound <span className="text-[#C9A84C]">Like You?</span>
          </h2>
          <ul className="space-y-4 mb-12">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#C9A84C] text-xl mt-0.5 shrink-0">
                  ✗
                </span>
                <span className="text-white/80 text-lg">{p}</span>
              </li>
            ))}
          </ul>
          <div className="border border-[#C9A84C]/30 rounded-2xl p-8 bg-[#C9A84C]/5 text-center">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              In this free consultation call, I will understand your business,
              identify what is not working, and give you a{" "}
              <strong className="text-[#C9A84C]">
                clear digital marketing plan
              </strong>{" "}
              you can start implementing immediately.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            How The Free Consultation{" "}
            <span className="text-[#C9A84C]">Works</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#C9A84C]/40 transition-colors"
              >
                <span className="text-4xl font-extrabold text-[#C9A84C] mb-3">
                  {step.number}
                </span>
                <p className="text-sm md:text-base text-white/80 leading-snug">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Form Section */}
      <section id="form-section" className="py-20 px-4 bg-white/[0.03]">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your FREE 1:1{" "}
            <span className="text-[#C9A84C]">Consultation Call</span>
          </h2>
          <p className="text-white/60 text-lg">
            Fill up the form below and we&apos;ll contact you with the next
            steps.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <FlodeskFormWrapper />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/bhandari_kritagya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#C9A84C] transition-colors text-sm font-medium"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1GWgnrDbLs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#C9A84C] transition-colors text-sm font-medium"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/9779704593561"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#C9A84C] transition-colors text-sm font-medium"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-white/40 text-sm">
          © 2025 Kritagya Bhandari. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
