import Header from "@/components/Header";
import { specialityCakes } from "@/data/constants";

export default function SpecialityCakesPage() {
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
                Celebration Cakes
              </p>
              <h1 className="text-4xl font-semibold text-[var(--brand-deep)]">
                SPECIALITY CAKES
              </h1>
              <p className="max-w-2xl mx-auto text-[#5b3459]">
                Make your special moments unforgettable with our handcrafted specialty cakes. 
                Each cake is made to order with fresh ingredients and personalized attention.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specialityCakes.map((cake) => (
                <div
                  key={cake.title}
                  className="flex flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm ring-1 ring-[#f2d7ea] hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4 text-center">{cake.image}</div>
                  <h2 className="text-xl font-semibold text-[var(--brand-deep)]">
                    {cake.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-[#5b3459]">
                    {cake.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-[var(--brand-primary)]">
                    {cake.price}
                  </p>
                  <button className="mt-4 rounded-full border border-[var(--brand-primary)]/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary)] transition hover:bg-[#f6deed]">
                    Order Now
                  </button>
                </div>
              ))}
            </div>
            <div className="rounded-[36px] border border-white/40 bg-gradient-to-br from-[#1f051f] via-[#3b0f3f] to-[#561c56] p-10 text-white shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Custom Cake Orders
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                Design your dream cake for any occasion
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/80">
                Birthday cakes, anniversary cakes, wedding cakes, or any special celebration - 
                we create custom designs tailored to your preferences. Minimum 24 hours advance notice required.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase">
                <span className="rounded-full bg-white/10 px-4 py-1">
                  WhatsApp for Custom Orders
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1">
                  24 Hours Advance Notice
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

