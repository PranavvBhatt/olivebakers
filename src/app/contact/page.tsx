"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "919350597596";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I want to place an order.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = "Hello! I want to know more about Olive Bakers products.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
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
                Get in Touch
              </p>
              <h1 className="text-4xl font-semibold text-[var(--brand-deep)]">
                CONTACT US
              </h1>
              <p className="max-w-2xl mx-auto text-[#5b3459]">
                Have a question or want to place an order? We're here to help!
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[32px] border border-white/60 bg-white p-8 shadow-xl">
                <h2 className="text-2xl font-semibold text-[var(--brand-deep)] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                      Address
                    </p>
                    <p className="text-[#5b3459]">
                      B2-703, Olive County, Sector 5<br />
                      Vasundhara, Ghaziabad<br />
                      Uttar Pradesh 201012
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                      Phone / WhatsApp
                    </p>
                    <a href="tel:+919350597596" className="text-[var(--brand-primary)] hover:underline">
                      +91 9350597596
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                      Email
                    </p>
                    <a href="mailto:info@olivebakers.com" className="text-[var(--brand-primary)] hover:underline">
                      info@olivebakers.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                      Business Hours
                    </p>
                    <p className="text-[#5b3459]">
                      Monday - Sunday: 9:00 AM - 8:00 PM<br />
                      Orders accepted 24/7 via WhatsApp
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8a4a88] mb-2">
                      Certification
                    </p>
                    <p className="text-[#5b3459]">
                      FSSAI Registered<br />
                      (Govt. of India)
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5d2260]"
                  >
                    WhatsApp Us
                  </button>
                  <a href="tel:+919350597596" className="rounded-full border border-[var(--brand-primary)]/30 bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-primary)] transition hover:bg-[#f6deed]">
                    Call Now
                  </a>
                </div>
              </div>
              <div className="rounded-[32px] border border-white/60 bg-white p-8 shadow-xl">
                <h2 className="text-2xl font-semibold text-[var(--brand-deep)] mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full rounded-full border border-[#edcfe3] px-4 py-3 text-sm text-[var(--brand-deep)] focus:border-[#c886b5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full rounded-full border border-[#edcfe3] px-4 py-3 text-sm text-[var(--brand-deep)] focus:border-[#c886b5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full rounded-full border border-[#edcfe3] px-4 py-3 text-sm text-[var(--brand-deep)] focus:border-[#c886b5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full rounded-2xl border border-[#edcfe3] px-4 py-3 text-sm text-[var(--brand-deep)] focus:border-[#c886b5] focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#5d2260]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

