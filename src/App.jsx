import { useState } from "react";

const navLinks = [
  { view: "home", label: "Home" },
  { view: "home", label: "About", section: "about" },
  { view: "home", label: "Services", section: "services" },
  { view: "home", label: "Contact", section: "contact" },
  { view: "terms", label: "Project Terms" },
];

const socialLinks = [
  { href: "https://x.com/AlphaYohanna3", label: "X" },
  { href: "https://www.facebook.com/share/17bZG9ojn3/", label: "Facebook" },
  {
    href: "https://www.instagram.com/alphaayohanna?igsh=bmhiNnBtN2czNDN3",
    label: "Instagram",
  },
  { href: "https://www.linkedin.com/in/alphayohanna", label: "LinkedIn" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("home");

  const goToView = (nextView, sectionId) => {
    setView(nextView);
    setMenuOpen(false);

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderHome = () => (
    <>
      <section
        id="home"
        className="hero flex min-h-[90vh] flex-col items-center justify-center px-5 py-16 text-center"
      >
        <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:text-left">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I build polished web experiences that feel timeless.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              From sleek business websites to modern web apps, I create digital
              products that are thoughtful, fast, and built to elevate your
              brand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
              <button
                type="button"
                onClick={() => goToView("terms")}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-slate-200"
              >
                Book a Call
              </button>
              <button
                type="button"
                onClick={() => goToView("home", "services")}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-3 shadow-2xl shadow-black/40">
              <img
                src="/Hero.jpeg"
                alt="Alpha Yohanna"
                className="w-full h-auto md:h-[420px] rounded-[1.5rem] object-contain md:object-cover md:object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-sm sm:p-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Who I am</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m Alpha Yohanna, a software engineer focused on building modern,
              scalable, and user-friendly digital solutions that help businesses
              grow and stand out online.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-5 text-left text-base leading-8 text-slate-300">
              <p>
                My journey in software engineering began with the ALX Software
                Engineering program, where I built a strong foundation in
                problem-solving, clean development practices, and modern
                software principles.
              </p>
              <p>
                Since then, I’ve continued to grow through real-world projects,
                creating responsive business websites, custom web applications,
                and cross-platform mobile experiences that are both practical
                and reliable.
              </p>
              <p>
                I’m also expanding into AI automation to help businesses
                streamline workflows, save time, and work smarter with modern
                technology.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-black/30 p-6 text-left">
              <h3 className="text-xl font-semibold text-white">Specialties</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>• Business website development</li>
                <li>• Personal portfolio websites</li>
                <li>• Custom web applications</li>
                <li>• Mobile app development with React Native</li>
                <li>• AI automation solutions</li>
                <li>• Responsive web design and optimization</li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-white">
                Core Skills
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                HTML5, CSS3, JavaScript, React, React Native, Firebase,
                Supabase, Git & GitHub, REST APIs, and Microsoft Office Suite.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left">
            <p className="text-base leading-8 text-slate-300">
              I believe great software is not just about writing clean code;
              it’s about solving real problems, creating meaningful user
              experiences, and building digital products that truly last.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:alphayohanna33@gmail.com"
                className="text-blue-400 underline"
              >
                alphayohanna33@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="https://wa.me/08033199422"
                className="text-blue-400 underline"
              >
                +234 803 319 9422
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Services</h2>
        <ul className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-2">
          {[
            "Web Development",
            "Mobile App Development",
            "Product Architecture",
            "AI Integration",
          ].map((service) => (
            <li
              key={service}
              className="rounded-3xl border border-slate-800 bg-slate-950/70 px-6 py-6 text-slate-200 shadow-sm transition hover:border-blue-600"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-8 text-left sm:text-center sm:items-center">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 px-6 py-6 text-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Phone
            </p>
            <p className="mt-3 text-lg font-medium text-white">08033199422</p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 px-6 py-6 text-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Email
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              alphayohanna33@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-950/70 px-8 py-8 shadow-sm">
          <h2 className="text-3xl font-semibold">Project Terms</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
            Review the project agreement before booking a call.
          </p>
          <button
            type="button"
            onClick={() => goToView("terms")}
            className="mt-8 inline-flex rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Project Terms
          </button>
        </div>
      </section>
    </>
  );

  const renderTerms = () => (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-sm sm:p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
          Project Agreement & Booking Terms
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Project Terms
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          Please review the terms below before confirming your project.
        </p>

        <ul className="mt-8 space-y-4 text-left text-slate-200">
          <li>
            A <strong>50% upfront, non-refundable payment</strong> is required
            to start the project. The remaining balance is paid at agreed
            milestones after approval.
          </li>
          <li>
            The project includes <strong>one meeting per week</strong>.
            Additional meetings may incur extra charges.
          </li>
          <li>
            Work will follow the agreed project scope. Extra features, major
            changes, or additional revisions may require extra time and payment.
          </li>
          <li>
            Timely feedback and approvals help keep the project on schedule.
            Delays may extend the delivery timeline.
          </li>
          <li>
            If the project is cancelled, payments made are non-refundable, and
            completed work beyond the last paid milestone must be paid for.
          </li>
          <li>
            Only paid work will be delivered. Ownership of the final project
            transfers to the client after full payment.
          </li>
          <li>
            <strong>7–14 days of free post-launch support</strong> is included
            for bug fixes and minor adjustments. New features or ongoing
            maintenance will be billed separately.
          </li>
          <li>
            Important approvals and project communication should be made through
            <strong> WhatsApp or email</strong>.
          </li>
          <li>
            By making the initial payment, the client confirms they have read
            and agreed to these terms.
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-black/40 p-6">
          <h3 className="text-xl font-semibold text-white">
            Reach out directly
          </h3>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>
              Email:{" "}
              <a
                href="mailto:alphayohanna33@gmail.com"
                className="text-blue-400 underline"
              >
                alphayohanna33@gmail.com
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/08033199422"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                08033199422
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => goToView("home")}
            className="rounded-2xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Home
          </button>
          <button
            type="button"
            onClick={() => goToView("booking")}
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-600 hover:text-white"
          >
            I agree & continue
          </button>
        </div>
      </div>
    </section>
  );

  const renderBooking = () => (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-950/70 p-8 text-center shadow-sm sm:p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
          Booking
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Continue to your booking
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          You can now book a consultation call to discuss your project and next
          steps.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => goToView("home")}
            className="rounded-2xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Home
          </button>
          <a
            href="https://calendly.com/alphayohanna33/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-600 hover:text-white"
          >
            Book a Call Now
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-black/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <button
            type="button"
            onClick={() => goToView("home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-bold text-black">
              AY
            </div>
            <h1 className="text-lg font-semibold md:text-xl">Alpha Yohanna</h1>
          </button>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => goToView(link.view, link.section)}
                  className="rounded-2xl px-4 py-2 text-sm text-white transition hover:bg-slate-800 md:text-base"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              className="p-2 text-white md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={`md:hidden ${menuOpen ? "block" : "hidden"} border-t border-slate-900 bg-slate-950/95 py-4`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5">
            {navLinks.map((link) => (
              <button
                key={`${link.label}-mobile`}
                type="button"
                className="rounded-2xl px-4 py-3 text-left text-sm text-white transition hover:bg-slate-800"
                onClick={() => goToView(link.view, link.section)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {view === "home" && renderHome()}
        {view === "terms" && renderTerms()}
        {view === "booking" && renderBooking()}
      </main>

      <footer className="border-t border-slate-900 py-12 text-center">
        <p className="text-slate-500">
          &copy; 2026 Alpha Yohanna. All rights reserved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map((item) => {
            const bgClass = "bg-white";
            const iconColorClass = "text-black";

            const renderIcon = (label) => {
              switch (label) {
                case "Facebook":
                  return (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  );
                case "Instagram":
                  return (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="3.2" fill="white" />
                    </svg>
                  );
                case "LinkedIn":
                  return (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v13H0zM7 8h4.8v1.8h.1c.7-1.2 2.4-2.5 4.9-2.5C22 7.3 24 9.7 24 14.1V21H19v-6.1c0-1.5-.1-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H7z" />
                    </svg>
                  );
                default:
                  return (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 12h18M12 3v18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );
              }
            };

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bgClass} ${iconColorClass} flex h-14 w-14 items-center justify-center rounded-2xl transition hover:opacity-90`}
                aria-label={item.label}
              >
                {renderIcon(item.label)}
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}

export default App;
