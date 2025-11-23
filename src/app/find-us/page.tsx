import Header from "@/components/Header";
import { stores } from "@/data/constants";

export default function FindUsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
          <div className="absolute inset-y-0 right-[-10%] w-[60%] rounded-full bg-[#f3c6e1] blur-[140px]" />
          <div className="absolute inset-y-0 left-[-10%] w-[55%] rounded-full bg-[#d9b6da] blur-[160px]" />
        </div>
        <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:py-20">
          <section className="space-y-10">
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                Visit Us
              </p>
              <h1 className="text-4xl font-semibold text-[var(--brand-deep)]">
                FIND US
              </h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {stores.map((store) => (
                <div
                  key={store.city}
                  className="rounded-3xl border border-white/60 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88]">
                    {store.city}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--brand-deep)]">
                    {store.address}
                  </h2>
                  <p className="mt-2 text-sm text-[#5b3459]">{store.detail}</p>
                  <div className="mt-6 space-y-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=B2-703+Olive+County+Sector+5+Vasundhara+Ghaziabad+Uttar+Pradesh+201012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#5d2260] text-center block"
                    >
                      Get Directions
                    </a>
                    <a
                      href="https://wa.me/919350597596?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20location."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-full border border-[var(--brand-primary)]/30 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--brand-primary)] transition hover:bg-[#f6deed] text-center block"
                    >
                      WhatsApp Us
                    </a>
                    <a
                      href="tel:+919350597596"
                      className="w-full rounded-full border border-[var(--brand-primary)]/30 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--brand-primary)] transition hover:bg-[#f6deed] text-center block"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[32px] border border-white/50 bg-white/90 p-8 text-[var(--brand-deep)] shadow-lg">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a4a88]">
                    Delivery Information
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    We deliver fresh to your doorstep
                  </h2>
                  <p className="mt-2 text-sm text-[#5b3459]">
                    Available for delivery in Ghaziabad and surrounding areas. 
                    Minimum order and delivery charges may apply.
                  </p>
                  <p className="mt-3 text-xs font-semibold text-[#8a4a88]">
                    ✓ FSSAI Registered (Govt. of India)
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase">
                  <span className="rounded-full bg-[#f6deed] px-4 py-2 text-[#773b70] font-semibold">
                    Same Day Delivery
                  </span>
                  <span className="rounded-full border border-[var(--brand-primary)]/20 px-4 py-2 text-[#4b2a4d] font-semibold">
                    Pre-Order Available
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

