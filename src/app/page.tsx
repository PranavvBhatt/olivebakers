import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { highlights, homeProducts, bestSellers, googleReviews, googleReviewsLink } from "@/data/constants";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
          <div className="absolute inset-y-0 right-[-10%] w-[60%] rounded-full bg-[#f3c6e1] blur-[140px]" />
          <div className="absolute inset-y-0 left-[-10%] w-[55%] rounded-full bg-[#d9b6da] blur-[160px]" />
        </div>
        <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:py-20">
          {/* Hero Section */}
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center pt-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-[var(--brand-deep)] sm:text-5xl lg:text-6xl">
                  <span className="inline-flex items-center gap-4">
                    <Image
                      src="/olivebakers/olive-bakers-logo.svg"
                      width={72}
                      height={72}
                      alt="Olive Bakers emblem"
                      className="hidden rounded-full bg-white/70 p-2 shadow-md sm:block"
                    />
                    Olive Bakers®
                  </span>
                  <span className="block text-[var(--brand-primary)]">
                    Homemade · Fresh · Hygienic
                  </span>
                </h1>
                <p className="max-w-2xl text-lg text-[#4b2a4d]">
                  Welcome to Olive Bakers® - The Home Kitchen, your trusted home kitchen in Ghaziabad.
                  We craft fresh, homemade baked goods with love, using only the finest ingredients.
                  FSSAI Registered (Govt. of India).
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#5d2260]"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[var(--brand-primary)]/30 bg-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-[var(--brand-primary)] shadow-sm transition hover:border-[var(--brand-primary)]/60"
                >
                  Contact Us
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--brand-deep)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f6deed] px-4 py-2 text-xs font-semibold text-[#773b70] border border-[#8a4a88]/20">
                <span>✓</span>
                <span>FSSAI Registered (Govt. of India)</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-2xl shadow-[#e4c2da]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8e0ee] via-transparent to-[#d2b4d8]" />
              <div className="relative flex flex-col gap-5 p-6 sm:p-10">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#783c74]">
                  Special Offer
                </div>
                <p className="text-2xl font-semibold text-[var(--brand-deep)]">
                  Order your favorite cakes and pastries fresh from our home kitchen.
                </p>
                <p className="text-sm text-[#5b3459]">
                  Available for delivery in Ghaziabad and surrounding areas.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://wa.me/919350597596?text=Hello!%20I%20want%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#f6deed] px-4 py-1 text-[#8a4a88] hover:bg-[#f0d4e6] transition cursor-pointer"
                  >
                    WhatsApp Order
                  </a>
                  <Link
                    href="/speciality-cakes"
                    className="rounded-full border border-[var(--brand-primary)]/20 px-4 py-1 text-[#4b2a4d] hover:bg-white/50 transition"
                  >
                    Custom Cakes
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* About Our Bakery Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                Our Story
              </p>
              <h2 className="text-4xl font-semibold text-[var(--brand-deep)]">
                About Our Bakery
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6 rounded-[32px] border border-white/60 bg-[#f9e7f2] p-8 shadow-inner">
                <h3 className="text-2xl font-semibold text-[var(--brand-deep)]">
                  Welcome to Olive Bakers
                </h3>
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
                <Link
                  href="/about"
                  className="inline-block rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#5d2260]"
                >
                  Learn More
                </Link>
              </div>
              <div className="grid gap-4 text-sm">
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-white/60">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                    Our Values
                  </p>
                  <p className="text-[#4b2a4d]">
                    Fresh ingredients, homemade recipes, and uncompromising hygiene standards.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-white/60">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                    Our Promise
                  </p>
                  <p className="text-[#4b2a4d]">
                    Every order is prepared fresh, with attention to detail and love for baking.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Products Section */}
          <section className="space-y-10">
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                Featured Items
              </p>
              <h2 className="text-4xl font-semibold text-[var(--brand-deep)]">
                Our Products
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {homeProducts.map((product, index) => (
                <div
                  key={product.title}
                  className="flex flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm ring-1 ring-[#f2d7ea] hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#f8e0ee] to-[#d2b4d8] mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-deep)]">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--brand-primary)]">
                    {product.price}
                  </p>
                  <a
                    href={`https://wa.me/919350597596?text=${encodeURIComponent(`Hello! I am interested in ordering ${product.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center rounded-full border border-[var(--brand-primary)]/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary)] transition hover:bg-[#f6deed]"
                  >
                    Order Now
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/products"
                className="inline-block rounded-full bg-[var(--brand-primary)] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#5d2260]"
              >
                View All Products
              </Link>
            </div>
          </section>

          {/* Google Reviews Section */}
          <section className="space-y-10">
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                Customer Feedback
              </p>
              <h2 className="text-4xl font-semibold text-[var(--brand-deep)]">
                Google Reviews
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold text-[var(--brand-deep)]">5.0</span>
                <span className="text-sm text-[#5b3459]">(Based on {googleReviews.length} reviews)</span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col rounded-3xl border border-white/60 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#5b3459] mb-4 flex-1">
                    "{review.review}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[var(--brand-deep)] text-sm">{review.name}</p>
                    <p className="text-xs text-[#5b3459]">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-[var(--brand-primary)]/30 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--brand-primary)] transition hover:bg-[#f6deed]"
              >
                Read More Reviews on Google
              </a>
            </div>
          </section>

          {/* Best Sellers Section */}
          <section className="space-y-10">
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a4a88]">
                Popular Choice
              </p>
              <h2 className="text-4xl font-semibold text-[var(--brand-deep)]">
                Our Best Sellers
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {bestSellers.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm ring-1 ring-[#f2d7ea] hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#f8e0ee] to-[#d2b4d8] mb-4 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--brand-deep)] text-center">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#5b3459] text-center">
                    {item.description}
                  </p>
                  <p className="mt-6 text-lg font-semibold text-[var(--brand-primary)] text-center">
                    {item.price}
                  </p>
                  <a
                    href={`https://wa.me/919350597596?text=${encodeURIComponent(`Hello! I am interested in ordering ${item.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#5d2260]"
                  >
                    Order Now
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/40 bg-white/80 mt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-[#4b2a4d]">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/olivebakers/olive-bakers-logo.svg"
                  width={40}
                  height={40}
                  alt="Olive Bakers logo"
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold text-[var(--brand-primary)]">Olive Bakers®</span>
              </div>
              <p className="text-sm text-[#5b3459]">
                The Home Kitchen - FSSAI Registered (Govt. of India)<br />
                Crafting fresh, homemade baked goods with love.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--brand-primary)] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#5b3459]">
                <li>
                  <Link href="/about" className="hover:text-[var(--brand-primary)]">About Us</Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[var(--brand-primary)]">Products</Link>
                </li>
                <li>
                  <Link href="/speciality-cakes" className="hover:text-[var(--brand-primary)]">Speciality Cakes</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[var(--brand-primary)]">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--brand-primary)] mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[#5b3459]">
                <li>B2-703, Olive County, Sector 5</li>
                <li>Vasundhara, Ghaziabad</li>
                <li>Uttar Pradesh 201012</li>
                <li>
                  <a href="tel:+919350597596" className="hover:text-[var(--brand-primary)]">
                    +91 9350597596
                  </a>
                </li>
                <li>
                  <a href="mailto:info@olivebakers.com" className="hover:text-[var(--brand-primary)]">
                    info@olivebakers.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--brand-primary)] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-[var(--brand-primary)] hover:text-[#5d2260] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-[var(--brand-primary)] hover:text-[#5d2260] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-[var(--brand-primary)] hover:text-[#5d2260] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-[#5b3459]">
            <p>© {new Date().getFullYear()} Olive Bakers® - The Home Kitchen. All rights reserved.</p>
            <p className="mt-2 text-xs">FSSAI Registered (Govt. of India)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
