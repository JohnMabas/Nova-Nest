"use client";

import { useState } from "react";
import Image from "next/image";
import { POPULAR_ADS } from "@/data/content";
import { SpecRowCompact, Logo } from "@/components/ui";

function PropertyCard({ ad }) {
  return (
    <article className="flex w-full max-w-[400px] flex-col gap-5 rounded-xl bg-nest-mint p-5 transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[360/316] w-full overflow-hidden rounded-xl bg-nest-tiffany/20">
        <Image
          src={ad.image}
          alt={ad.title}
          fill
          unoptimized={typeof ad.image === "string" && ad.image.startsWith("http")}
          className="object-cover transition duration-500 hover:scale-105"
          sizes="360px"
        />
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <h3 className="text-2xl font-semibold leading-[130%] text-nest-bg">
          {ad.title}
        </h3>
        <p className="text-[21px] font-medium leading-[130%] text-nest-bg">
          {ad.price}
        </p>
        <p className="text-base font-medium leading-[160%] text-nest-bg">
          {ad.location}
        </p>
        <SpecRowCompact
          size={ad.size}
          bedrooms={ad.bedrooms}
          bathrooms={ad.bathrooms}
        />
      </div>
    </article>
  );
}

function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <aside className="relative flex min-h-[1058px] w-full max-w-[366px] flex-col overflow-hidden rounded-xl bg-[#FFCC49] p-10 text-nest-bg shadow-card">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(33,67,61,0.18), transparent 45%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="origin-left scale-90">
          <Logo dark />
        </div>
        <h3 className="text-[40px] font-bold leading-[130%] md:text-[56px]">
          The most intriguing, unique, and novel offers.
        </h3>
        <div className="space-y-4 text-lg font-medium leading-[160%]">
          <p>
            Stay ahead of the market with curated listings, emerging
            neighborhoods, and exclusive NovaNest drops delivered to your inbox.
          </p>
          <p>
            From architectural gems to waterfront escapes, every newsletter is
            packed with inspiration and actionable insights.
          </p>
          <p>
            Join thousands of discerning buyers and sellers who never miss the
            next remarkable opportunity.
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-auto flex flex-col gap-4">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-xl border-0 bg-white px-4 py-4 text-base font-semibold text-nest-bg outline-none ring-0 placeholder:text-nest-feld focus:ring-2 focus:ring-nest-sage"
          />
          <button type="submit" className="btn-primary w-full rounded-xl">
            Subscribe
          </button>
          {status && (
            <p className="text-sm font-medium text-nest-bg/80">{status}</p>
          )}
        </form>
      </div>
    </aside>
  );
}

export default function PopularAds({ apiProperty }) {
  const ads = [...POPULAR_ADS];

  if (apiProperty) {
    ads[0] = {
      ...ads[0],
      title: apiProperty.title || ads[0].title,
      price: apiProperty.price || ads[0].price,
      location: apiProperty.location || ads[0].location,
      size: apiProperty.size || ads[0].size,
      bedrooms: apiProperty.bedrooms || ads[0].bedrooms,
      bathrooms: apiProperty.bathrooms || ads[0].bathrooms,
      image: apiProperty.image || ads[0].image,
    };
  }

  return (
    <section id="popular-ads" className="relative pt-20 md:pt-28 xl:pt-[210px]">
      <div className="container-content flex flex-col items-center gap-10">
        <div className="flex max-w-[700px] flex-col items-center gap-2.5 text-center">
          <h2 className="section-title">Popular Ads of This Week</h2>
          <p className="section-lead">
            Explore our handpicked selection of popular listings at NovaNest
            Estates, showcasing a diverse range of exceptional properties that
            capture the essence of luxury living.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-5 xl:flex-row xl:items-start xl:gap-[14px]">
          <div className="grid w-full max-w-[820px] grid-cols-1 gap-5 sm:grid-cols-2">
            {ads.map((ad) => (
              <PropertyCard key={ad.title} ad={ad} />
            ))}
          </div>
          <div className="flex justify-center xl:justify-start">
            <NewsletterCard />
          </div>
        </div>
      </div>
    </section>
  );
}
