"use client";

import { useRef } from "react";
import Image from "next/image";
import { CATEGORIES } from "@/data/content";
import { ArrowButton } from "@/components/ui";

export default function ExploreCategories() {
  const scrollerRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(511, el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="categories" className="relative pt-20 md:pt-28 xl:pt-[174px]">
      <div className="pointer-events-none absolute -left-24 top-10 h-[360px] w-[360px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -left-8 top-24 h-[260px] w-[260px] rounded-full border border-white/5" />

      <div className="container-content flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <h2 className="section-title max-w-[170px] shrink-0">
            Explore Categories
          </h2>
          <p className="section-lead max-w-[700px] flex-1">
            Start exploring at NovaNest Estates and navigate our extensive range
            of categories to find the living space of your dreams. Each carefully
            curated, browse through diverse types of homes to discover your ideal
            residence.
          </p>
          <div className="flex shrink-0 gap-5">
            <ArrowButton direction="left" muted onClick={() => scrollByCard(-1)} />
            <ArrowButton direction="right" onClick={() => scrollByCard(1)} />
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="flex w-[min(491px,85vw)] shrink-0 flex-col items-center gap-5 rounded-xl bg-nest-mint p-5"
            >
              <div className="relative aspect-[451/316] w-full overflow-hidden rounded-xl">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="491px"
                />
              </div>
              <div className="flex w-full flex-col items-center gap-2.5 text-center">
                <h3 className="text-2xl font-semibold leading-[130%] text-nest-bg">
                  {category.title}
                </h3>
                <p className="text-base leading-[160%] text-nest-feld">
                  {category.count}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
