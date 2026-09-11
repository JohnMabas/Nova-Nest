"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/offline";
import formatQuoteClose from "@iconify-icons/mdi/format-quote-close";
import { TESTIMONIALS } from "@/data/content";
import { ArrowButton, SpecRow } from "@/components/ui";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = TESTIMONIALS[index];
  const nextPeek = TESTIMONIALS[(index + 1) % TESTIMONIALS.length];

  const prev = () =>
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden pt-20 md:pt-28 xl:pt-[200px]"
    >
      <div className="pointer-events-none absolute -left-10 top-8 h-48 w-48 rounded-full bg-nest-sun" />
      <div className="pointer-events-none absolute left-16 top-0 h-[360px] w-[360px] rounded-full border border-white/10" />

      <div className="container-content flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <h2 className="section-title max-w-[172px] shrink-0">
            What Our Clients Say
          </h2>
          <p className="section-lead max-w-[700px] flex-1">
            Discover why our clients love NovaNest Estates. Read firsthand
            accounts of exceptional service, beautiful homes, and unforgettable
            experiences that made their real estate journey seamless and
            rewarding.
          </p>
          <div className="flex shrink-0 gap-5">
            <ArrowButton direction="left" muted onClick={prev} />
            <ArrowButton direction="right" onClick={next} />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-5">
            <article className="grid min-h-[520px] w-full shrink-0 overflow-hidden rounded-xl bg-nest-mint lg:min-h-[600px] lg:w-[1200px] lg:grid-cols-[500px_1fr]">
              <div className="relative min-h-[280px] w-full lg:min-h-full">
                <Image
                  src={item.image}
                  alt={item.property}
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>
              <div className="relative flex flex-col justify-center gap-10 p-8 md:p-10">
                <Icon
                  icon={formatQuoteClose}
                  className="absolute right-10 top-[30px] text-[90px] leading-none text-nest-bg/[0.08]"
                />
                <div className="flex flex-col gap-5">
                  <h3 className="text-[32px] font-semibold leading-[130%] text-nest-bg">
                    {item.property}
                  </h3>
                  <p className="text-[21px] font-medium leading-[130%] text-nest-feld">
                    {item.location}
                  </p>
                  <SpecRow
                    size={item.size}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    dark
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="relative h-[75px] w-[75px] overflow-hidden rounded-full bg-nest-tiffany/30">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="75px"
                      />
                    </div>
                    <p className="text-2xl font-semibold leading-[130%] text-nest-bg">
                      {item.name}
                    </p>
                  </div>
                  <p className="max-w-[620px] text-lg leading-[160%] text-nest-feld">
                    {item.quote}
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden min-h-[600px] w-[320px] shrink-0 overflow-hidden rounded-xl md:block">
              <div className="relative h-full w-full">
                <Image
                  src={nextPeek.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
