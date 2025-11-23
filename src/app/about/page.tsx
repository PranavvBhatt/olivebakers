import Header from "@/components/Header";
import { testimonials } from "@/data/constants";

export default function AboutPage() {
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
                Our Story
              </p>
              <h1 className="text-4xl font-semibold text-[var(--brand-deep)]">
                ABOUT US
              </h1>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6 rounded-[32px] border border-white/60 bg-[#f9e7f2] p-8 shadow-inner">
                <h2 className="text-2xl font-semibold text-[var(--brand-deep)]">
                  Welcome to Olive Bakers® - The Home Kitchen
                </h2>
                <p className="text-[#5b3459]">
                  Olive Bakers® - The Home Kitchen is based at B2-703, Olive County, Sector 5, Vasundhara, Ghaziabad, 
                  dedicated to bringing you fresh, homemade baked goods crafted with love and care. 
                  We believe in using only the finest ingredients to create delicious treats that 
                  bring joy to your special moments.
                </p>
                <p className="text-[#5b3459]">
                  Our journey started with a simple passion for baking and a commitment to 
                  quality. Every item we create is made fresh daily, ensuring you get the best 
                  taste and hygiene standards. From celebration cakes to everyday pastries, 
                  we put our heart into every bite.
                </p>
                <div className="grid gap-4 text-sm">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88]">
                      Our Values
                    </p>
                    <p className="mt-2 text-[#4b2a4d]">
                      Fresh ingredients, homemade recipes, and uncompromising hygiene standards.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88]">
                      Our Promise
                    </p>
                    <p className="mt-2 text-[#4b2a4d]">
                      Every order is prepared fresh, with attention to detail and love for baking.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm border-2 border-[#8a4a88]">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88]">
                      FSSAI Registered
                    </p>
                    <p className="mt-2 text-[#4b2a4d]">
                      Government of India Certified<br />
                      Ensuring quality and hygiene standards
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 rounded-[32px] border border-white/60 bg-white p-8 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a4a88]">
                  Why Choose Us
                </p>
                {testimonials.map((t) => (
                  <figure key={t.author} className="space-y-4 border-t pt-6 first:border-0 first:pt-0">
                    <blockquote className="text-lg font-medium text-[var(--brand-deep)]">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="text-sm text-[#5b3459]">
                      {t.author} · {t.detail}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

