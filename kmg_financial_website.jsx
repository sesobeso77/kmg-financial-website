export default function KMGFinancialWebsite() {
  const services = [
    {
      title: "Bookkeeping",
      desc: "Structured, accurate financial records maintained monthly.",
      icon: "📒",
    },
    {
      title: "Financial Reporting",
      desc: "Clear insights into your business performance.",
      icon: "📈",
    },
    {
      title: "Payroll Support",
      desc: "Reliable payroll coordination and compliance.",
      icon: "💳",
    },
    {
      title: "QuickBooks Solutions",
      desc: "Setup, cleanup, and optimization.",
      icon: "🧾",
    },
    {
      title: "Accounts Payable & Receivable",
      desc: "Cash flow management and tracking.",
      icon: "💰",
    },
    {
      title: "Sales Tax Compliance",
      desc: "Accurate and timely filing support.",
      icon: "✅",
    },
  ];

  const reasons = [
    {
      title: "Precision & Accuracy",
      desc: "Meticulous attention to detail to keep your financial records organized and dependable.",
      icon: "☑️",
    },
    {
      title: "Confidential & Professional",
      desc: "Your financial data is handled with professionalism, privacy, and care.",
      icon: "🔒",
    },
    {
      title: "Streamlined Financial Processes",
      desc: "Efficient systems that reduce confusion and create smoother day-to-day operations.",
      icon: "⚖️",
    },
    {
      title: "Tax-Ready Financial Records",
      desc: "Books prepared with organization in mind so tax season is easier and cleaner.",
      icon: "🗂️",
    },
  ];

  const Nav = () => (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#08162d]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <img
            src="/mnt/data/F72FD805-A50E-4BA3-BA12-2667C322BD4F.png"
            alt="KMG Financial logo"
            className="h-12 w-auto rounded"
          />
          <div>
            <div className="text-lg font-semibold tracking-[0.18em] text-yellow-400">KMG FINANCIAL LLC</div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">Corporate Financial Services</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <a href="#services" className="transition hover:text-yellow-400">Services</a>
          <a href="#about" className="transition hover:text-yellow-400">About</a>
          <a href="#why" className="transition hover:text-yellow-400">Why KMG</a>
          <a href="#contact" className="transition hover:text-yellow-400">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl border border-yellow-400 bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] shadow-lg shadow-yellow-900/20 transition hover:opacity-90"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );

  const GoldButton = ({ children, href = "#contact" }) => (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-yellow-200 bg-gradient-to-r from-[#b9872f] via-[#d4af37] to-[#b9872f] px-7 py-3.5 text-sm font-semibold tracking-[0.04em] text-white shadow-lg shadow-black/20 transition hover:scale-[1.01]"
    >
      {children}
    </a>
  );

  const OutlineButton = ({ children, href = "#services" }) => (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-white/50 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-[0.04em] text-white transition hover:bg-white/10"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#071427] text-white">
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-yellow-500/20 bg-[#08162d]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_30%),linear-gradient(180deg,rgba(7,20,39,0.35),rgba(7,20,39,0.8))]" />
            <img
              src="/mnt/data/29c55e18-9ea7-4e9c-81aa-58e558414551.png"
              alt="KMG branding background"
              className="h-full w-full object-cover opacity-20"
            />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.38em] text-yellow-400">KMG Financial LLC</p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-white md:text-7xl">
                Strategic Financial Clarity for Growing Businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Premium bookkeeping, financial reporting, payroll support, and tax-ready solutions designed to help your business operate with precision and confidence.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <GoldButton>Book Consultation</GoldButton>
                <OutlineButton>View Services</OutlineButton>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="rounded-[24px] border border-yellow-400/20 bg-[#0d223e]/90 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Executive Financial Support</p>
                <h3 className="mt-4 text-3xl font-semibold">Built for trust, structure, and business growth</h3>
                <div className="mt-6 space-y-4 text-slate-200">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Monthly bookkeeping and reconciliations</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Accurate payroll coordination and reporting</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">QuickBooks cleanup and financial organization</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Tax-ready books and professional support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTHORITY STRIP */}
        <section className="border-b border-yellow-500/20 bg-[#0a1830] py-6">
          <div className="mx-auto max-w-7xl px-6 text-center text-lg tracking-[0.08em] text-slate-100 lg:px-8">
            Trusted Financial Support • Accurate Reporting • Scalable Systems • Business Growth Focused
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative overflow-hidden bg-[#f8f7f4] py-24 text-[#0B1F3A]">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/mnt/data/29c55e18-9ea7-4e9c-81aa-58e558414551.png"
              alt="background texture"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b9872f]">Services</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Core Financial Services</h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[26px] border border-[#dcc08b] bg-white/95 p-9 text-center shadow-xl shadow-slate-300/40 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f7edd5] text-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex rounded-xl border border-[#b9872f] bg-gradient-to-r from-[#b9872f] via-[#d4af37] to-[#b9872f] px-8 py-3 text-base font-semibold text-white shadow-lg"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="relative overflow-hidden border-y border-yellow-500/20 bg-[#08162d] py-24">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/mnt/data/29c55e18-9ea7-4e9c-81aa-58e558414551.png"
              alt="KMG background"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,45,0.88),rgba(8,22,45,0.96))]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">Why KMG</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Why Businesses Choose KMG Financial LLC</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                KMG Financial LLC provides structured financial solutions designed to bring clarity, organization, and confidence to your business operations.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-yellow-400/20 bg-white/5 p-7 shadow-xl shadow-black/20 backdrop-blur-sm"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <GoldButton href="#about">Learn More</GoldButton>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-[#f8f7f4] py-24 text-[#0B1F3A]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b9872f]">About KMG</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">A Professional Approach to Financial Management</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                KMG Financial LLC provides structured financial solutions designed to bring clarity, organization, and confidence to your business operations. We specialize in accurate bookkeeping, reliable reporting, payroll support, and scalable financial systems that support long-term growth.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Our mission is to deliver dependable financial support that helps business owners make better decisions, stay prepared for tax season, and build stronger internal processes.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#dcc08b] bg-white p-8 shadow-2xl shadow-slate-300/40">
              <img
                src="/mnt/data/F72FD805-A50E-4BA3-BA12-2667C322BD4F.png"
                alt="KMG logo"
                className="mx-auto h-40 w-auto object-contain"
              />
              <div className="mt-8 space-y-4 text-slate-700">
                <div className="rounded-2xl bg-[#f8f2e4] p-4"><span className="font-semibold text-[#0B1F3A]">Mission:</span> Clear, accurate, and reliable financial services.</div>
                <div className="rounded-2xl bg-[#f8f2e4] p-4"><span className="font-semibold text-[#0B1F3A]">Approach:</span> Corporate-level professionalism with personalized support.</div>
                <div className="rounded-2xl bg-[#f8f2e4] p-4"><span className="font-semibold text-[#0B1F3A]">Focus:</span> Small businesses, entrepreneurs, and growing operations.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="relative overflow-hidden bg-[#08162d] py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Take Control of Your Financial Operations</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Ready to elevate your financial systems? Schedule a consultation and let’s discuss how KMG Financial LLC can support your business.
              </p>

              <div className="mt-8 space-y-4 text-lg text-slate-200">
                <p><span className="font-semibold text-yellow-400">Email:</span> KMGFinancialLLC@gmail.com</p>
                <p><span className="font-semibold text-yellow-400">Phone:</span> 561-200-3838</p>
                <p><span className="font-semibold text-yellow-400">Location:</span> Boynton Beach, FL</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white">Schedule a Consultation</h3>
              <p className="mt-3 text-slate-300">Use this section for your Wix form, booking widget, or Calendly embed.</p>
              <div className="mt-8 space-y-4">
                <input className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0B1F3A] outline-none" placeholder="Full Name" />
                <input className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0B1F3A] outline-none" placeholder="Email Address" />
                <input className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0B1F3A] outline-none" placeholder="Business Name" />
                <textarea className="min-h-[140px] w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0B1F3A] outline-none" placeholder="How can we help?" />
                <button className="w-full rounded-xl border border-yellow-300 bg-gradient-to-r from-[#b9872f] via-[#d4af37] to-[#b9872f] px-6 py-3 text-sm font-semibold text-white shadow-lg">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-yellow-500/10 bg-[#071427] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center text-sm text-slate-400 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/mnt/data/F72FD805-A50E-4BA3-BA12-2667C322BD4F.png"
              alt="KMG Financial logo"
              className="h-10 w-auto"
            />
            <span>KMG Financial LLC</span>
          </div>
          <p>© 2026 KMG Financial LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
