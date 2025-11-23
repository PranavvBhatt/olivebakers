import Header from "@/components/Header";
import { signatureCollections, menus } from "@/data/constants";

export default function ProductsPage() {
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
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                  Our Range
                </p>
                <h1 className="mt-2 text-4xl font-semibold text-[var(--brand-deep)]">
                  PRODUCTS
                </h1>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {signatureCollections.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm ring-1 ring-[#f2d7ea]"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88]">
                    {item.tag}
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold text-[var(--brand-deep)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-[#5b3459]">
                    {item.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-[var(--brand-primary)]">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
            <section className="rounded-[40px] border border-white/50 bg-white px-8 py-12 shadow-xl shadow-[#e4c2da]">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-lg space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                    Daily Menu
                  </p>
                  <h2 className="text-2xl font-semibold text-[var(--brand-deep)]">
                    Fresh bakes available daily
                  </h2>
                  <p className="text-sm text-[#5b3459]">
                    We bake in small batches throughout the day to ensure freshness. 
                    Pre-orders available via WhatsApp.
                  </p>
                </div>
                <div className="grid w-full gap-6 md:grid-cols-3">
                  {menus.map((menu) => (
                    <div
                      key={menu.title}
                      className="flex flex-col rounded-3xl border border-[#efd2e5] bg-[#fdf2f9] p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#9c5b97]">
                        {menu.timing}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-[var(--brand-deep)]">
                        {menu.title}
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm text-[#5b3459]">
                        {menu.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#a0559c]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

